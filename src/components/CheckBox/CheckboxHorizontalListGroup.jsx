import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
  } from "@material-tailwind/react";
import { useContext } from "react";
import { UseUpperCaseContext } from "../../context/UseUpperCase";
   
  export function CheckboxHorizontalListGroup() {
    const { useUpperCase, setUpperCase } = useContext(UseUpperCaseContext);

    return (
      <Card className="w-full">
        <List className="flex flex-row">
           <ListItem className="p-0 bg-blue-500">
            <label
              htmlFor="useUpperCase"
              className="flex w-full cursor-pointer items-center px-2 md:px-3 py-1 md:py-2 "
              onClick={() => setUpperCase(!useUpperCase)}
            >
              <ListItemPrefix className="md:mr-3 mr-2">
                <Checkbox
                  id="uppercase"
                  ripple={false}
                  className="appearence-none focus:ring-transparent hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  checked={useUpperCase}
                  onChange={(event) => setUpperCase(event.target.checked)}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-slate-50">
                ABC
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0 bg-blue-500">
            <label
              htmlFor="useUpperCase"
              className="flex w-full cursor-pointer items-center px-3 py-2 "
              onClick={() => setUpperCase(!useUpperCase)}
            >
              <ListItemPrefix className="md:mr-3 mr-2">
                <Checkbox
                  id="uppercase"
                  ripple={false}
                  className="appearence-none focus:ring-transparent hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  checked={useUpperCase}
                  onChange={(event) => setUpperCase(event.target.checked)}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-slate-50">
                abc
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0 bg-blue-500">
            <label
              htmlFor="useUpperCase"
              className="flex w-full cursor-pointer items-center px-3 py-2 "
              onClick={() => setUpperCase(!useUpperCase)}
            >
              <ListItemPrefix className="md:mr-3 mr-2">
                <Checkbox
                  id="uppercase"
                  ripple={false}
                  className="appearence-none focus:ring-transparent hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  checked={useUpperCase}
                  onChange={(event) => setUpperCase(event.target.checked)}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-slate-50">
                123
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="useUpperCase"
              className="flex w-full cursor-pointer items-center px-3 py-2 "
              onClick={() => setUpperCase(!useUpperCase)}
            >
              <ListItemPrefix className="md:mr-3 mr-2">
                <Checkbox
                  id="uppercase"
                  ripple={false}
                  className="appearence-none focus:ring-transparent hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  checked={useUpperCase}
                  onChange={(event) => setUpperCase(event.target.checked)}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-gray-900">
                @#&
              </Typography>
            </label>
          </ListItem>
        </List>
      </Card>
    );
  }