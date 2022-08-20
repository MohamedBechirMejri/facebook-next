import { useRouter } from "next/router";
import { useEffect } from "react";
import { L72 } from "react-isloading";

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
    <L72
      style={{
        height: "10rem",
        width: "10rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Token;
