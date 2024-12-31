import Button from "./ui/Button"


const TodoList = () => {

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between hover:bg-gray-100 p-3 rounded-md">
          <div>
            <p className="font-semibold">First Todo</p>
            <p className="text-gray-600 text-sm">more recently with including versions of Lorem Ipsum.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button size={"sm"}>Edit</Button>
            <Button size={"sm"} variant={"danger"}>Remove</Button>
          </div>
        </div>
      </div>



    </>
  )
}

export default TodoList