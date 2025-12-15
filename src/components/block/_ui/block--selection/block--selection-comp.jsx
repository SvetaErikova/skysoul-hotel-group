export const Block_selection = ({
  tabs = []
}) => {
  return (
    <div class={"block--selection"}>
      {tabs.map((tab, index) => (
        <a
          class={index === 0 ? "is_active" : ""}
          data-section_id={''}
          href={ "/"}
        >
          <span>          {tab.label}</span>

        </a>
      ))}
    </div>
  );
};
