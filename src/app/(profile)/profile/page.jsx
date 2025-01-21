"use client";

import Loading from "@/common/Loaing";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLocalDate";

function Profile() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1>{user.name} خوش آمدی!</h1>
      <p>
        <span>تاریخ پیوستن : {toLocalDateString(user.createdAt)}</span>
      </p>
    </div>
  );
}
export default Profile;
