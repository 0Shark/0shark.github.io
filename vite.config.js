import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// Set the MIME type for JSON files to "application/json"
		mimeTypes: {
			json: "application/json",
		},
	}
});
