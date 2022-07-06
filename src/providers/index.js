import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <HabitsProvider>
          <GroupsProvider>
            <GoalsProvider>
              <ActivitiesProvider>{children}</ActivitiesProvider>
            </GoalsProvider>
          </GroupsProvider>
        </HabitsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Providers;
