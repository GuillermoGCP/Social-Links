import useLinksToday from "../hooks/useLinksToday";
import OneLink from "./OneLink";

const LinksToday = () => {
  const { today, changeRating2 } = useLinksToday();

  return (
    <section className="max-w-2xl mx-auto mt-8 p-4">
      <ul>
        {today
          ? today.map((link) => (
              <div key={link.id} className="p-4 border-2 border-x-slate-200">
                <OneLink
                  key={link.id}
                  link={link}
                  changeRating2={changeRating2}
                />
                <div className="p-5 max-w-xs mx-auto"></div>
              </div>
            ))
          : ""}
      </ul>
    </section>
  );
};

export default LinksToday;
