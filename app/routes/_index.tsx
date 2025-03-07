import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BrokerBlocks" },
    { name: "description", content: "An AI-powered sales intelligence and process automation platform designed to help real estate professionals improve prospect engagement and conversion" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>BrokerBlocks</h1>
    </div>
  );
}
