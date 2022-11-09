import React from "react";
import Layout from "~/layout/Layout.component";
import { NextPageWithLayout } from "~/types/common.types";

const Home: NextPageWithLayout = () => {
	return (
		<Layout>
			<h1>DaftAcademy - WebApp 2022</h1>
		</Layout>
	);
};

Home.getLayout = (page) => {
	return <div>{page}</div>;
};

export default Home;
