import { couponListTableTHeads } from "@/constants/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";

function CouponListTable({ coupons }) {
    console.log(coupons);
    
  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {couponListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => {
            return (
              <tr key={coupon._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td  whitespace-nowrap font-bold">
                  {coupon.code}
                </td>
                <td className="table__td">
                  <span className="badge badge--primary">{coupon.type}</span>
                </td>
                <td className="table__td">{coupon.amount}</td>
                <td className="table__td">
                  <div className="space-y-2 flex flex-col items-start">
                    {coupon.productIds.map((p) => {
                      return (
                        <span className="badge badge--secondary">
                          {p.title}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="table__td">{coupon.usageCount}</td>
                <td className="table__td">{coupon.usageLimit}</td>
                <td className="table__td">
                  {toLocalDateStringShort(coupon.expireDate)}
                </td>
                <td className="table__td font-bold text-lg">
                  <div className="flex items-center gap-x-4">
                    <Link href={`/admin/coupons/${coupon._id}`}>
                      <HiEye className="text-primary-900 w-6 h-6" />
                    </Link>
                    <button>
                      <HiTrash className="text-rose-600 w-6 h-6" />
                    </button>
                    <Link href={`/admin/coupons/edit/${coupon._id}`}>
                      <RiEdit2Line className="w-6 h-6 text-secondary-600" />
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

export default CouponListTable;
