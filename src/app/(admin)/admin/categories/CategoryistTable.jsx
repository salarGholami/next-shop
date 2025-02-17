import { categoryListTableTHeads } from "@/constants/tableHeads";
import Link from "next/link";
import { RiEdit2Line } from "react-icons/ri";
import { HiEye, HiTrash } from "react-icons/hi";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useRemoveCategory } from "@/hooks/useCategories";

function CategoryListTable({ categories }) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useRemoveCategory();

  const removeCategoryHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {categoryListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={category._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td whitespace-nowrap font-bold">
                  {category.title}
                </td>
                <td className="table__td">{category.description}</td>
                <td className="table__td">{category.englishTitle}</td>
                <td className="table__td">
                  <span className="badge badge--secondary">
                    {category.type}
                  </span>
                </td>
                <td className="table__td font-bold text-lg">
                  <div className="flex items-center gap-x-4">
                    <Link href={`/admin/categories/${category._id}`}>
                      <HiEye className="text-primary-900 w-5 h-5" />
                    </Link>
                    <button onClick={() => removeCategoryHandler(category._id)}>
                      <HiTrash className="text-rose-600 w-5 h-5" />
                    </button>
                    <Link href={`/admin/categories/edit/${category._id}`}>
                      <RiEdit2Line className="w-5 h-5 text-secondary-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CategoryListTable;
