import {
	createUserWithEmailAndPassword,
	fetchSignInMethodsForEmail,
	getAdditionalUserInfo,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../config/Firebase";
import { toast } from "react-toastify";
import { validatePassword } from "../utils/Validation";

type AuthProps = {
	email: string;
	password: string;
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
};

export const signUp = async ({ email, password, navigate, setLoading }: AuthProps) => {
	setLoading(true);

	// Validate password before attempting signup
	const passwordError = validatePassword(password);
	if (passwordError) {
		toast.error(passwordError);
		setLoading(false);
		return;
	}

	try {
		await createUserWithEmailAndPassword(auth, email, password);
		toast.success("Account created successfully!");
		setTimeout(() => navigate("/activate-account"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

export const signIn = async ({ email, password, navigate, setLoading }: AuthProps) => {
	setLoading(true);

	// Basic validation before API call
	if (!password) {
		toast.error("Please enter your password");
		setLoading(false);
		return;
	}

	try {
		const methods = await fetchSignInMethodsForEmail(auth, email);
		if (methods.length === 0) {
			toast.info("User not found. Please sign up first.");
			setTimeout(() => navigate("/sign-up"), 1000);
			return;
		}

		await signInWithEmailAndPassword(auth, email, password);
		toast.success("Signed in successfully!");
		setTimeout(() => navigate("/dashboard"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

type GoogleAuthProps = {
	navigate: (path: string) => void;
	setLoading: (loading: boolean) => void;
};

export const signUpWithGoogle = async ({ navigate, setLoading }: GoogleAuthProps) => {
	setLoading(true);
	try {
		await signInWithPopup(auth, googleProvider);
		toast.success("Signed up successfully!");
		setTimeout(() => navigate("/activate-account"), 1000);
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

export const signInWithGoogle = async ({ navigate, setLoading }: GoogleAuthProps) => {
	setLoading(true);
	try {
		const result = await signInWithPopup(auth, googleProvider);
		const additionalInfo = getAdditionalUserInfo(result);

		if (additionalInfo?.isNewUser) {
			toast.error("User not found. Please sign up first.");
			setTimeout(() => navigate("/sign-up"), 1000);
		} else {
			toast.success("Signed in successfully!");
			setTimeout(() => navigate("/dashboard"), 1000);
		}
	} catch (error: unknown) {
		handleError(error, navigate);
	} finally {
		setLoading(false);
	}
};

function handleError(error: unknown, navigate: (path: string) => void) {
	let errorCode = "unknown";
	let errorMessage = "Authentication failed";

	if (typeof error === "object" && error !== null && "code" in error) {
		errorCode = (error as { code: string }).code;
	}

	switch (errorCode) {
		case "auth/email-already-in-use":
			errorMessage = "Email already in use. Please sign in.";
			setTimeout(() => navigate("/login"), 1000);
			break;
		case "auth/user-not-found":
			errorMessage = "User not found. Please sign up.";
			setTimeout(() => navigate("/sign-up"), 1000);
			break;
		case "auth/wrong-password":
			errorMessage = "Incorrect password. Please try again.";
			break;
		case "auth/invalid-email":
			errorMessage = "Invalid email format.";
			break;
		case "auth/invalid-credential":
			errorMessage = "Invalid email or password.";
			break;
		case "auth/weak-password":
			errorMessage = "Password should be at least 6 characters";
			break;
		case "auth/popup-closed-by-user":
			errorMessage = "Sign-in popup closed. Please try again.";
			break;
		case "auth/too-many-requests":
			errorMessage = "Too many attempts. Please try again later.";
			break;
		default:
			errorMessage = `Authentication failed: ${errorCode}`;
			break;
	}

	toast.error(errorMessage);
}
