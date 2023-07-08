import * as React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import UserCard from "@/components/widgets/users/UserCard";
import { StudentModel } from "@/models/student.model";
import { Search } from "@mui/icons-material";
import ActionButton from "./ActionButton";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";

interface CustomPageProps {
  title: string;
  hasSearch?: boolean;
  crudName?: string;
  users: Array<StudentModel>;
}

const CustomCrudPage: React.FC<CustomPageProps> = ({
  title,
  hasSearch,
  users,
  crudName,
}) => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const filteredUsers =
    search.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      : users;

  const goToCreate = () => {
    router.push(`/${crudName}/create`);
  };

  return (
    <div className="flex flex-col justify-center md:h-[90vh] md:w-[80vw]">
      <Box
        className="max-w-sm md:max-w-xs p-3 rounded-t-xl"
        bgcolor="primary.main"
      >
        <Typography className="text-center" variant="h2">
          {title}
        </Typography>
      </Box>
      <Box
        className="flex flex-col rounded-b-2xl md:rounded-tr-2xl p-6 md:p-14 min-h-screen md:min-h-full items-center overflow-y-scroll shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}
        bgcolor="background.paper"
      >
        {hasSearch && (
          <TextField
            className="max-w-xl w-full pb-4"
            label={`Pesquisar ${title.toLowerCase()}...`}
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 pt-12 gap-x-6 gap-y-14">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </Box>
      <div className="fixed bottom-2 right-2 md:bottom-[4vh] md:right-[2vw]">
        <ActionButton
          Icon={AddIcon}
          isLarge={true}
          color="green"
          handleClick={crudName ? () => goToCreate() : () => {}}
        />
      </div>
    </div>
  );
};

export default CustomCrudPage;
