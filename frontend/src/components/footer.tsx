export default function Footer() {
  return (
    <div className="min-h-96 bg-darkened text-textLight p-1 md:p-10 flex flex-col justify-between">
      <div className="min-h-4/5 flex border-gray-700 border-b-[0.5px] p-8">
        <div className="text-center flex flex-col items-center">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
            srcSet=""
            className="max-h-40"
          />
          <p>Take your idea from concept to reality</p>
        </div>

        <div></div>
      </div>

      <div className="flex justify-between items-center h-1/5">
        <p>(C) 2024 CoBuild. All Rights Reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="text-accent">
            Terms and Conditions
          </a>
          <a href="#" className="text-accent">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
