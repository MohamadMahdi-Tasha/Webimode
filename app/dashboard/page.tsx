// Importing part
import {ReactNode} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";
import FirstDivComponent from "@/component/page/section/dashboard/firstDivComponent";
import SecondDivComponent from "@/component/page/section/dashboard/secondDivComponent";
import ThirdDivComponent from "@/component/page/section/dashboard/thirdDivComponent";

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <div className="flex flex-col gap-[32px]">
                <FirstDivComponent />
                <SecondDivComponent />
                <ThirdDivComponent />
            </div>
        </DashboardPageComponent>
    );
}