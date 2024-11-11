import { ImagePositionEnum, ProductSection } from './components';
import { PRODUCT_LIST, SECTION_TITLE } from './products.constants';

export const Products = () => {
  return (
    <section className="my-[70px] w-full space-y-[70px] overflow-hidden">
      <h2 className="text-center text-3xl leading-normal tracking-neg-3 text-brand md:text-[40px]">
        {SECTION_TITLE}
      </h2>
      <div className="mb-5 flex flex-col gap-24 md:gap-44">
        {PRODUCT_LIST.map((product, index) => {
          const {
            sectionNumber,
            title,
            subtitle,
            description,
            image: productImage
          } = product;

          const imagePosition =
            index % 2 === 0 ? ImagePositionEnum.LEFT : ImagePositionEnum.RIGHT;

          return (
            <ProductSection
              key={sectionNumber}
              sectionNumber={sectionNumber}
              title={title}
              subtitle={subtitle}
              description={description}
              productImage={productImage}
              imagePosition={imagePosition}
            />
          );
        })}
      </div>
    </section>
  );
};
