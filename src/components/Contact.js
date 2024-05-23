const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Contact Us Page</h1>
      <form>
        <input
          type="test"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="test"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black rounded-md m-2 p-2 bg-blue-300">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
