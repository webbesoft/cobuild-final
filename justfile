generate_secret_key:
    python -c "import secrets; print(secrets.token_urlsafe(32))"

generate_openssl_secret:
    openssl rand -hex 32