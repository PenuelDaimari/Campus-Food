import {ItemList} from "./Menu";
import {ProductCard} from "./ProductCard";

export const FoodItems = () => {
  return (
    <>
      <div className={'flex justify-center items-center flex-col mt-24 gap-8'}>
        <h1 className={'font-bold text-5xl'}>Food Menu</h1>
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
          {
            ItemList.map((menuItem, index) => (
              <ProductCard {...menuItem} key={index} />
            ))
          }
        </div>
      </div>
    </>
  )
}
