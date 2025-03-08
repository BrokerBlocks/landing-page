import type { MetaFunction } from "@remix-run/node"
import type { LinksFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "BrokerBlocks" },
    { name: "description", content: "BrokerBlocks is the AI-powered sales intelligence platform built for real estate professionals who want to engage smarter, close faster, and scale effortlessly." },
  ];
};

import styles from "~/styles/index.css?url";
import bbLogo from "../../public/bb_logo.png"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div>
      <h1>BrokerBlocks</h1>
      <center>
        <img src={bbLogo} alt="BrokerBlocks logo" />
      </center>
      <center>
        <i>Stealth Mode - Invitation Only</i>
      </center>
      <center className="break big">
        Turn More Leads into Clients. <br />
        Turn More Clients into Raving Fans!
      </center>
      <center className="break">
        <a href="/" className="linkBtn">Apply for Early Access</a>
      </center>
      <center className="break">
        <small>Questions? Reach out at support@brokerblocks.com</small>
      </center>
    </div>
  );
}
