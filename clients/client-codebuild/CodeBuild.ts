import { CodeBuildClient } from "./CodeBuildClient";
import {
  BatchDeleteBuildsCommand,
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput
} from "./commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildsCommand,
  BatchGetBuildsCommandInput,
  BatchGetBuildsCommandOutput
} from "./commands/BatchGetBuildsCommand";
import {
  BatchGetProjectsCommand,
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput
} from "./commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommand,
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput
} from "./commands/BatchGetReportGroupsCommand";
import {
  BatchGetReportsCommand,
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput
} from "./commands/BatchGetReportsCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "./commands/CreateProjectCommand";
import {
  CreateReportGroupCommand,
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput
} from "./commands/CreateReportGroupCommand";
import {
  CreateWebhookCommand,
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput
} from "./commands/CreateWebhookCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "./commands/DeleteProjectCommand";
import {
  DeleteReportCommand,
  DeleteReportCommandInput,
  DeleteReportCommandOutput
} from "./commands/DeleteReportCommand";
import {
  DeleteReportGroupCommand,
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput
} from "./commands/DeleteReportGroupCommand";
import {
  DeleteSourceCredentialsCommand,
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput
} from "./commands/DeleteSourceCredentialsCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "./commands/DeleteWebhookCommand";
import {
  DescribeTestCasesCommand,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput
} from "./commands/DescribeTestCasesCommand";
import {
  ImportSourceCredentialsCommand,
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput
} from "./commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommand,
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput
} from "./commands/InvalidateProjectCacheCommand";
import {
  ListBuildsCommand,
  ListBuildsCommandInput,
  ListBuildsCommandOutput
} from "./commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput
} from "./commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommand,
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput
} from "./commands/ListCuratedEnvironmentImagesCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "./commands/ListProjectsCommand";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput
} from "./commands/ListReportGroupsCommand";
import {
  ListReportsCommand,
  ListReportsCommandInput,
  ListReportsCommandOutput
} from "./commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput
} from "./commands/ListReportsForReportGroupCommand";
import {
  ListSourceCredentialsCommand,
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput
} from "./commands/ListSourceCredentialsCommand";
import {
  StartBuildCommand,
  StartBuildCommandInput,
  StartBuildCommandOutput
} from "./commands/StartBuildCommand";
import {
  StopBuildCommand,
  StopBuildCommandInput,
  StopBuildCommandOutput
} from "./commands/StopBuildCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "./commands/UpdateProjectCommand";
import {
  UpdateReportGroupCommand,
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput
} from "./commands/UpdateReportGroupCommand";
import {
  UpdateWebhookCommand,
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput
} from "./commands/UpdateWebhookCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 *
 *          <fullname>AWS CodeBuild</fullname>
 *          <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code,
 *          runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need
 *          to provision, manage, and scale your own build servers. It provides prepackaged build
 *          environments for the most popular programming languages and build tools, such as Apache
 *          Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use
 *          your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You pay only
 *          for the build time you consume. For more information about AWS CodeBuild, see the <i>
 *                <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User Guide</a>.</i>
 *          </p>
 *          <p>AWS CodeBuild supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetBuilds</code>: Gets information about one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetProjects</code>: Gets information about one or more build projects.
 *                A <i>build project</i> defines how AWS CodeBuild runs a build. This includes
 *                information such as where to get the source code to build, the build environment to
 *                use, the build commands to run, and where to store the build output. A
 *                <i>build environment</i> is a representation of operating system,
 *                programming language runtime, and tools that AWS CodeBuild uses to run a build. You can add
 *                tags to build projects to help manage your resources and costs.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReportGroups</code>: Returns an array of report groups.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReports</code>: Returns an array of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProject</code>: Creates a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateReportGroup</code>: Creates a report group. A report group contains a collection of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start
 *                rebuilding the source code every time a code change is pushed to the
 *                repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>: Deletes a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReport</code>: Deletes a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReportGroup</code>: Deletes a report group.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteSourceCredentials</code>: Deletes a set of GitHub, GitHub Enterprise,
 *                or Bitbucket source credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding
 *                the source code every time a code change is pushed to the repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeTestCases</code>:  Returns a list of details about test cases for a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ImportSourceCredentials</code>: Imports the source repository credentials for an AWS CodeBuild project that has its source code stored
 *                in a GitHub, GitHub Enterprise, or Bitbucket repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InvalidateProjectCache</code>: Resets the cache for a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing
 *                a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified
 *                build project, with each build ID representing a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images
 *                that are managed by AWS CodeBuild.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>: Gets a list of build project names, with each build
 *                project name representing a single build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportGroups</code>: Gets a list ARNs for the report groups in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReports</code>: Gets a list ARNs for the reports in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportsForReportGroup</code>: Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSourceCredentials</code>: Returns a list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes
 *                the authentication type, token ARN, and type of source provider for one set of credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartBuild</code>: Starts running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StopBuild</code>: Attempts to stop running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>: Changes the settings of an existing build
 *                project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateReportGroup</code>: Changes a report group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateWebhook</code>: Changes the settings of an existing webhook.</p>
 *             </li>
 *          </ul>
 *
 */
export class CodeBuild extends CodeBuildClient {
  /**
   *
   *          <p>Deletes one or more builds.</p>
   *
   */
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteBuildsCommandOutput>;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDeleteBuildsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): Promise<BatchDeleteBuildsCommandOutput> | void {
    const command = new BatchDeleteBuildsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets information about one or more builds.</p>
   *
   */
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBuildsCommandOutput>;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetBuildsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): Promise<BatchGetBuildsCommandOutput> | void {
    const command = new BatchGetBuildsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets information about one or more build projects.</p>
   *
   */
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetProjectsCommandOutput>;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetProjectsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): Promise<BatchGetProjectsCommandOutput> | void {
    const command = new BatchGetProjectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns an array of report groups.
   *       </p>
   *
   */
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportGroupsCommandOutput>;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetReportGroupsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): Promise<BatchGetReportGroupsCommandOutput> | void {
    const command = new BatchGetReportGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns an array of reports.
   *       </p>
   *
   */
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportsCommandOutput>;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchGetReportsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): Promise<BatchGetReportsCommandOutput> | void {
    const command = new BatchGetReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Creates a build project.</p>
   *
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Creates a report group. A report group contains a collection of reports.
   *       </p>
   *
   */
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportGroupCommandOutput>;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateReportGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): Promise<CreateReportGroupCommandOutput> | void {
    const command = new CreateReportGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
   *          Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code
   *          change is pushed to the repository.</p>
   *          <important>
   *             <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step
   *             in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered
   *             through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you
   *             are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you
   *             disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more
   *             information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a
   *                Build Project's Settings</a>.</p>
   *          </important>
   *
   */
  public createWebhook(
    args: CreateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebhookCommandOutput>;
  public createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateWebhookCommandOutput) => void),
    cb?: (err: any, data?: CreateWebhookCommandOutput) => void
  ): Promise<CreateWebhookCommandOutput> | void {
    const command = new CreateWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Deletes a build project. When you delete a project, its builds are not deleted.
   *       </p>
   *
   *
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Deletes a report.
   *       </p>
   *
   */
  public deleteReport(
    args: DeleteReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportCommandOutput>;
  public deleteReport(
    args: DeleteReportCommandInput,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;
  public deleteReport(
    args: DeleteReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;
  public deleteReport(
    args: DeleteReportCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReportCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportCommandOutput) => void
  ): Promise<DeleteReportCommandOutput> | void {
    const command = new DeleteReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *             <code>DeleteReportGroup</code>: Deletes a report group. Before you delete a report group, you must
   *          delete its reports. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to
   *          get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call
   *          <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown.
   *       </p>
   *
   */
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportGroupCommandOutput>;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteReportGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): Promise<DeleteReportGroupCommandOutput> | void {
    const command = new DeleteReportGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
   *       </p>
   *
   */
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceCredentialsCommandOutput>;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): Promise<DeleteSourceCredentialsCommandOutput> | void {
    const command = new DeleteSourceCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
   *          Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change
   *          is pushed to the repository.</p>
   *
   */
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebhookCommandOutput>;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteWebhookCommandOutput) => void),
    cb?: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): Promise<DeleteWebhookCommandOutput> | void {
    const command = new DeleteWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns a list of details about test cases for a report.
   *       </p>
   *
   */
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestCasesCommandOutput>;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTestCasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): Promise<DescribeTestCasesCommandOutput> | void {
    const command = new DescribeTestCasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Imports the source repository credentials for an AWS CodeBuild project that has its source code stored
   *          in a GitHub, GitHub Enterprise, or Bitbucket repository.
   *       </p>
   *
   */
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSourceCredentialsCommandOutput>;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ImportSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): Promise<ImportSourceCredentialsCommandOutput> | void {
    const command = new ImportSourceCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Resets the cache for a project.</p>
   *
   */
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvalidateProjectCacheCommandOutput>;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: InvalidateProjectCacheCommandOutput) => void),
    cb?: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): Promise<InvalidateProjectCacheCommandOutput> | void {
    const command = new InvalidateProjectCacheCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets a list of build IDs, with each build ID representing a single build.</p>
   *
   */
  public listBuilds(
    args: ListBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildsCommandOutput>;
  public listBuilds(
    args: ListBuildsCommandInput,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBuildsCommandOutput) => void),
    cb?: (err: any, data?: ListBuildsCommandOutput) => void
  ): Promise<ListBuildsCommandOutput> | void {
    const command = new ListBuildsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets a list of build IDs for the specified build project, with each build ID
   *          representing a single build.</p>
   *
   */
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildsForProjectCommandOutput>;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBuildsForProjectCommandOutput) => void),
    cb?: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): Promise<ListBuildsForProjectCommandOutput> | void {
    const command = new ListBuildsForProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
   *
   */
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void),
    cb?: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): Promise<ListCuratedEnvironmentImagesCommandOutput> | void {
    const command = new ListCuratedEnvironmentImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Gets a list of build project names, with each build project name representing a single
   *          build project.</p>
   *
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Gets a list ARNs for the report groups in the current AWS account.
   *       </p>
   *
   */
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportGroupsCommandOutput>;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListReportGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): Promise<ListReportGroupsCommandOutput> | void {
    const command = new ListReportGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns a list of ARNs for the reports in the current AWS account.
   *       </p>
   *
   */
  public listReports(
    args: ListReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsCommandOutput>;
  public listReports(
    args: ListReportsCommandInput,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  public listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  public listReports(
    args: ListReportsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListReportsCommandOutput) => void),
    cb?: (err: any, data?: ListReportsCommandOutput) => void
  ): Promise<ListReportsCommandOutput> | void {
    const command = new ListReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
   *       </p>
   *
   */
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsForReportGroupCommandOutput>;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListReportsForReportGroupCommandOutput) => void),
    cb?: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): Promise<ListReportsForReportGroupCommandOutput> | void {
    const command = new ListReportsForReportGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Returns a list of <code>SourceCredentialsInfo</code> objects.
   *       </p>
   *
   */
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceCredentialsCommandOutput>;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): Promise<ListSourceCredentialsCommandOutput> | void {
    const command = new ListSourceCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Starts running a build.</p>
   *
   */
  public startBuild(
    args: StartBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBuildCommandOutput>;
  public startBuild(
    args: StartBuildCommandInput,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;
  public startBuild(
    args: StartBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;
  public startBuild(
    args: StartBuildCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartBuildCommandOutput) => void),
    cb?: (err: any, data?: StartBuildCommandOutput) => void
  ): Promise<StartBuildCommandOutput> | void {
    const command = new StartBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Attempts to stop running a build.</p>
   *
   */
  public stopBuild(
    args: StopBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBuildCommandOutput>;
  public stopBuild(
    args: StopBuildCommandInput,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;
  public stopBuild(
    args: StopBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;
  public stopBuild(
    args: StopBuildCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopBuildCommandOutput) => void),
    cb?: (err: any, data?: StopBuildCommandOutput) => void
  ): Promise<StopBuildCommandOutput> | void {
    const command = new StopBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Changes the settings of a build project.</p>
   *
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>
   *          Updates a report group.
   *       </p>
   *
   */
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportGroupCommandOutput>;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateReportGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): Promise<UpdateReportGroupCommandOutput> | void {
    const command = new UpdateReportGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p> Updates the webhook associated with an AWS CodeBuild build project. </p>
   *          <note>
   *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
   *          </p>
   *          </note>
   *
   */
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebhookCommandOutput>;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateWebhookCommandOutput) => void),
    cb?: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): Promise<UpdateWebhookCommandOutput> | void {
    const command = new UpdateWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}