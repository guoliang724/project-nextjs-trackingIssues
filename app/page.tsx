import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Grid, Flex } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });

  const close = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} closed={close} inProgress={inProgress} />
        <IssueChart open={open} closed={close} inProgress={inProgress} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
