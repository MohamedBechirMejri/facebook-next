import { useRouter } from "next/router";
import { useEffect } from "react";

const Token = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      // @ts-ignore
      localStorage.setItem("token", token);
      router.push("/");
    }
  }, [router, token]);

  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};

export default Token;
