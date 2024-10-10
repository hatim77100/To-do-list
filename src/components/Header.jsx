import { useItemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";
// import useItemsContext from "./lib/hooks";

export default function Header() {
  // const { items } = useItemsContext();
  const items = useItemStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
