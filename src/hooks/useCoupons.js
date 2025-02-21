import { addNewCoupon, getAllCoupons } from "@/services/couponService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddNewCoupons = () => useMutation({ mutationFn: addNewCoupon });
