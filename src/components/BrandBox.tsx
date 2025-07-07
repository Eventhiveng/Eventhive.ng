import Image from "next/image";

const BrandBox = ({ brandLogo }: { brandLogo: string }) => {
  return (
    <div className="brand-box">
      <Image
        src={brandLogo}
        title=""
        alt="Brand logo"
        width={120}
        height={60}
        className="brand-logo"
      />
    </div>
  );
};

export default BrandBox;
