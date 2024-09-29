import Link from 'next/link';

const Button = () => {
  return (
    <Link href="/signin">
      <span className="h-12 rounded-lg bg-white font-bold px-5 hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center cursor-pointer">
        Sign In
      </span>
    </Link>
  );
};

export default Button;
