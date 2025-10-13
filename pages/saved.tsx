import axios from "axios";
import type { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "~/components/Header";
import Post from "~/components/Post/Post";
import getUser from "~/lib/Auth/getUser";
import type PostType from "~/types/PostType";

const L49 = dynamic(
	() => import("react-isloading").then((mod) => mod.L49),
	{ ssr: false },
);

const Home = ({ user }: { user: any }) => {
	user = user.user;

	const [posts, setPosts] = useState([] as PostType[]);

	useEffect(() => {
		axios
			.get("/api/posts")
			.then((res) =>
				setPosts(
					res.data.posts.filter((p: any, i: number) =>
						user.saves.includes(p._id),
					),
				),
			);
	}, [user.saves]);

	return (
		<div>
			<Header user={user}>
				<div className="relative flex w-screen min-h-screen p-2 py-4 text-black">
					<h1 className="fixed text-3xl font-semibold top-24 left-12">Saved</h1>
					<main className="mx-auto sm:w-[590px] flex flex-col justify-start items-stretch gap-4 pb-64 z-40 bg-[#f0f2f5] text-[#606266] w-full">
						<div className="flex flex-col items-stretch gap-4">
							{posts && posts.length > 0 ? (
								posts.map((p) =>
									user.saves.includes(p._id) ? (
										<Post key={p._id} post={p} user={user} />
									) : null,
								)
							) : (
								<L49
									style={{
										height: "7rem",
										width: "7rem",
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
									}}
								/>
							)}
						</div>
					</main>
				</div>
			</Header>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	let user = null;

	// @ts-ignore
	user = await getUser(req, res);
	return {
		props: {
			user,
		},
	};
};

export default Home;
