import React from "react";

type GreetingsProps = {
	name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => {
	return <div>하이 {name}</div>;
};

export default Greetings;
