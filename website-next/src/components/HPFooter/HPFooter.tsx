"use client";
import Link from "next/link";
import { EngageLinks, FooterLink, ProductLinks, SocialLinks } from "./HPFooterLinks";

const HPFooter: React.FC = () => {
  const date = new Date();

  return (
    <footer className="bg-background_gray">
      <div className="w-full max-w-7xl mx-auto gap-4 flex justify-between p-4 flex-wrap">
        <div>
          <Link href="/">Logo</Link>
          <p className="mt-4">
            Bugwatch is an open-source AI powered Bug Tracking System.
          </p>
          <div className="mt-4">
            {SocialLinks.map((link: FooterLink) => (
              <Link key={link.href} href={link.href}>
                image
              </Link>
            ))}
          </div>
          <p className="mt-4">@{date.getFullYear()}Bugwatch</p>
        </div>
        <div className="flex gap-8">
          <div>
            <h3>Product</h3>
            <ul>
              {ProductLinks.map((link: FooterLink) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Engage</h3>
            <ul>
              {EngageLinks.map((link: FooterLink) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HPFooter;
