import app from "./src/app";
const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
