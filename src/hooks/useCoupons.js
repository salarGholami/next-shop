import { getAllCoupons } from "@/services/couponService";
import { useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
    useQuery({
      queryKey: ["get-coupons"],
      queryFn: getAllCoupons,
      retry: false,
      refetchOnWindowFocus: true,
    });
  