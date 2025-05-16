import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";
import { toast } from "react-toastify";

export const signUp = async ({
	email,
	password,
	navigate,
	setLoading,
}: {
	email: string;
	password: string;
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
}) => {
	setLoading(true);
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		toast.success("Account created successfully!");
		setTimeout(() => navigate("/login"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

export const signIn = async ({
	email,
	password,
	navigate,
	setLoading,
}: {
	email: string;
	password: string;
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
}) => {
	setLoading(true);
	try {
		await signInWithEmailAndPassword(auth, email, password);
		toast.success("Signed in successfully!");
		setTimeout(() => navigate("/dashboard"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

export const signUpWithGoogle = async ({
	navigate,
	setLoading,
}: {
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
}) => {
	setLoading(true);
	try {
		await signInWithPopup(auth, googleProvider);
		toast.success("Signed up successfully!");
		setTimeout(() => navigate("/dashboard"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

export const signInWithGoogle = async ({
	navigate,
	setLoading,
}: {
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
}) => {
	setLoading(true);
	try {
		await signInWithPopup(auth, googleProvider);
		toast.success("Signed in successfully!");
		setTimeout(() => navigate("/dashboard"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

function handleError(error: unknown, navigate: (path: string) => void) {
	let errorCode = "unknown";
	if (typeof error === "object" && error !== null && "code" in error) {
		errorCode = (error as { code: string }).code;
	}
	switch (errorCode) {
		case "auth/email-already-in-use":
			toast.error("Email already in use. Please sign in.");
			setTimeout(() => navigate("/login"), 1000);
			break;
		case "auth/invalid-credential":
			toast.info("No user found. Please sign up first.");
			setTimeout(() => navigate("/sign-up"), 1000);
			break;
		case "auth/invalid-email":
			toast.error("Invalid email address.");
			break;
		default:
			toast.error("Auth failed: " + errorCode);
			break;
	}
}
// const logout = async () => {
// 	try {
// 		await signOut(auth);
// 		console.log("User signed out successfully");
// 		toast.success("Signed out successfully!");
// 		setTimeout(() => Navigate(""), 1000);
// 	} catch (error) {
// 		console.error("Error signing out:", error);
// 	}
// };
