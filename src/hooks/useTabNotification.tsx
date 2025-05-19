import { useTabNotification } from "react-haiku";

export const Component = () => {
	const { setTitlePrefix, setFlashMessage, setIsShown, setCustomTitle, setShowFaviconDot } = useTabNotification();

	return (
		<>
			<button onClick={() => setIsShown(true)}>Show Notification</button>

			<input type="text" placeholder="Custom title" onChange={(e) => setCustomTitle(e.target.value)} />

			<button
				onClick={() => {
					setTitlePrefix("[ALERT]");
					setFlashMessage("New message!");
					setShowFaviconDot(true);
				}}
			>
				Trigger Alert
			</button>
		</>
	);
};
