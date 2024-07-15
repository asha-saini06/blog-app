import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(categories, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};

/**  Inside the function, it uses the prisma.category.findMany() method to fetch all the data from a database. The fetched data is stored in the categories variable.

If the data is successfully fetched, the function returns a NextResponse object with the fetched data as a JSON string. The response status is set to 200.

If an error occurs during the fetching process, the function logs the error and returns a NextResponse object with a JSON string containing a message "Something went wrong!" and a response status of 500.

Overall, this code snippet is a part of an API route that handles a GET request to fetch data from a database. */