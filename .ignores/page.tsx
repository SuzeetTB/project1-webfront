import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="../../public/icons/logo.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
