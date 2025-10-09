import { ResponsiveWrapper } from "../../ui";

export function Footer() {
  return (
    <footer>
      <ResponsiveWrapper withMargin>
        <div className="content-center">
          <p>© Ben Gaudry - {new Date().getFullYear()}</p>
        </div>
      </ResponsiveWrapper>
    </footer>
  );
}
