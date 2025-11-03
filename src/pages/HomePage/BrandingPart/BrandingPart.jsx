import branding1 from "../../../assets/brand1.png";
import branding2 from "../../../assets/brand2.png";
import branding3 from "../../../assets/brand3.png";
import branding4 from "../../../assets/brand4.png";
const BrandingPart = () => {
  return (
    <div className="max-w-[360px] md:max-w-[720px] lg:max-w-[1200px] mx-auto mt-[35px]">
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center gap-10 justify-center">
                <a className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                  <img
                    loading="lazy"
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                    alt="Modern living room interior with orange sofa, indoor plants, and wooden furniture"
                    className="w-full h-10"
                  />
                </a>
                <a className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                  <img
                    loading="lazy"
                    src={branding1}
                    alt="Modern living room interior with orange sofa, indoor plants, and wooden furniture"
                    className="w-full h-6"
                  />
                </a>
                <a className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                  <img
                    loading="lazy"
                    src={branding2}
                    alt="Modern living room interior with orange sofa, indoor plants, and wooden furniture"
                    className="w-full h-8"
                  />
                </a>
                <a className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                  <img
                    loading="lazy"
                    src={branding3}
                    alt="Modern living room interior with orange sofa, indoor plants, and wooden furniture"
                    className="w-full h-6"
                  />
                </a>{" "}
                <a className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[90px]">
                  <img
                    loading="lazy"
                    src={branding4}
                    alt="Modern living room interior with orange sofa, indoor plants, and wooden furniture"
                    className="w-full h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingPart;
