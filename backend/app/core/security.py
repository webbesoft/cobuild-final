from datetime import datetime, timedelta, timezone
from typing import Any

import jwt
from app.core.config import settings
from fastapi.responses import JSONResponse
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


ALGORITHM = "HS256"


def create_access_token(subject: str | Any, expires_delta: timedelta) -> str:
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def generate_cookie(subject: str, response: JSONResponse) -> JSONResponse:
    response.set_cookie(
        "cobuild_token",
        create_access_token(subject, timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)),
        max_age=48,
        domain="localhost",
        samesite=None,
        secure=True,
    )

    return response


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
