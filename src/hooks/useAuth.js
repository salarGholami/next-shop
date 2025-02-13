import { getAllUsers, getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () =>
  useQuery({
    queryFn: getUserProfile,
    queryKey: ["get-user"],
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUsers = () =>
  useQuery({
    queryFn: getAllUsers,
    queryKey: ["get-users"],
    retry: false,
    refetchOnWindowFocus: true,
  });
