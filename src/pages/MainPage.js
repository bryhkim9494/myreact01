import TodoList from "../components/todo/TodoList";
import BasicLayout from "../layouts/BasicLayout";
import TestLayout from "../layouts/TestLayout";


const MainPage = () => {
    return (
        <BasicLayout>
            <h2>Main Page</h2>
            <TodoList>

            </TodoList>
        </BasicLayout>
    );
}

export default MainPage;