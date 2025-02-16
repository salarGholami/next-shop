import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

function ProductForm({
  onSubmit,
  tags,
  setTags,
  productData,
  productDataOnChange,
  categories,
  setSelectedCategory,
  isLoading,
  selectedCategory = "",
}) {
  return (
    <div className="max-w-sm">
      <form onSubmit={onSubmit}>
        {productsFormData.map((item) => {
          return (
            <TextField
              key={item.id}
              label={item.label}
              name={item.name}
              value={productData[item.name] ?? ""}
              onChange={productDataOnChange}
            />
          );
        })}
        <div className="py-3 px-4">
          <label htmlFor="tags">تگ محصولات</label>
          <TagsInput
            id="tages"
            placeHolder="عنوان تگ + Enter"
            value={tags}
            onChange={setTags}
            name="tags"
          />
        </div>
        <div className="py-3 px-4">
          <label htmlFor="category" className="mb-2">
            دسته بندی
          </label>
          <Select
            className="text-sm"
            id="category"
            placeholder="انتخاب ..."
            onChange={setSelectedCategory}
            options={categories}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.id}
            defaultValue={selectedCategory}
          />
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
