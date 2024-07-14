import { SolvingAILogo } from "../../assets/SolvingAILogo";
import { Column } from "../Column/Column";
import './Footer.scss';

export const Footer = ({footerData, bottomText}) => {
  return (
    <footer className="footer">
      <div className="footer__column container">
        {footerData.map((column, index) => (
            <Column
              key={index}
              column={column}
            />
        ))}
      </div>
      <div className="footer__bottom-info">
        <SolvingAILogo />
        <p>{bottomText}</p>
      </div>
    </footer>
  )
}

