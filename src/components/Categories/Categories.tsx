import './categories.styles.scss';
import CategoryItem from '../Category-Item/Category-Item';

const Categories = ({categories}:any) => {
  return (
    <div className="categories-container">
      {categories.map((category:any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;