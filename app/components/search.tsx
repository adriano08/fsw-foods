import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center gap-3">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="sm">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
