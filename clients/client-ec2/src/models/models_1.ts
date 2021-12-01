import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  _InstanceType,
  AcceleratorCount,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiB,
  AcceleratorType,
  AddPrefixListEntry,
  ApplianceModeSupportValue,
  AttachmentStatus,
  BareMetal,
  BurstablePerformance,
  CpuManufacturer,
  CurrencyCodeValues,
  DnsSupportValue,
  FleetLaunchTemplateSpecification,
  HostnameType,
  InstanceEventWindow,
  InstanceGeneration,
  InstanceRequirementsRequest,
  InternetGatewayAttachment,
  Ipv4PrefixSpecification,
  Ipv6SupportValue,
  LocalStorage,
  LocalStorageType,
  ReservedInstancesListing,
  ResourceType,
  RouteTableAssociationState,
  Subnet,
  Tag,
  TagSpecification,
  Tenancy,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayPeeringAttachment,
  TransitGatewayVpcAttachment,
  UnsuccessfulItem,
  VolumeAttachment,
  Vpc,
  WeekDay,
} from "./models_0";

/**
 * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
 *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface BaselineEbsBandwidthMbps {
  /**
   * <p>The minimum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum baseline bandwidth, in Mbps. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

export namespace BaselineEbsBandwidthMbps {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaselineEbsBandwidthMbps): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
 *          <p></p>
 */
export interface MemoryGiBPerVCpu {
  /**
   * <p>The minimum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of memory per vCPU, in GiB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

export namespace MemoryGiBPerVCpu {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemoryGiBPerVCpu): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum and maximum amount of memory, in MiB.</p>
 */
export interface MemoryMiB {
  /**
   * <p>The minimum amount of memory, in MiB. If this parameter is not specified, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of memory, in MiB. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

export namespace MemoryMiB {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemoryMiB): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum and maximum number of network interfaces.</p>
 */
export interface NetworkInterfaceCount {
  /**
   * <p>The minimum number of network interfaces. If this parameter is not specified, there is no
   *          minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of network interfaces. If this parameter is not specified, there is no
   *          maximum limit.</p>
   */
  Max?: number;
}

export namespace NetworkInterfaceCount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceCount): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum and maximum amount of total local storage, in GB.</p>
 */
export interface TotalLocalStorageGB {
  /**
   * <p>The minimum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no minimum limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of total local storage, in GB. If this parameter is not specified, there is
   *          no maximum limit.</p>
   */
  Max?: number;
}

export namespace TotalLocalStorageGB {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TotalLocalStorageGB): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum and maximum number of vCPUs.</p>
 */
export interface VCpuCountRange {
  /**
   * <p>The minimum number of vCPUs. If the value is <code>0</code>, there is no minimum
   *          limit.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of vCPUs. If this parameter is not specified, there is no maximum
   *          limit.</p>
   */
  Max?: number;
}

export namespace VCpuCountRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VCpuCountRange): any => ({
    ...obj,
  });
}

/**
 * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
 *          identify instance types with these attributes.</p>
 *          <p>When you specify multiple parameters, you get instance types that satisfy all of the
 *          specified parameters. If you specify multiple values for a parameter, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <note>
 *             <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other parameters
 *             are optional. Any unspecified optional parameter is set to its default.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export interface InstanceRequirements {
  /**
   * <p>The minimum and maximum number of vCPUs.</p>
   */
  VCpuCount?: VCpuCountRange;

  /**
   * <p>The minimum and maximum amount of memory, in MiB.</p>
   */
  MemoryMiB?: MemoryMiB;

  /**
   * <p>The CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU manufacturer with the CPU architecture. Instances will
   *          be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you
   *          specify in your launch template.</p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   */
  CpuManufacturers?: (CpuManufacturer | string)[];

  /**
   * <p>The minimum and maximum amount of memory per vCPU, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu;

  /**
   * <p>The instance types to exclude. You can use strings with one or more wild cards, represented by
   *       an asterisk (<code>*</code>), to exclude an instance type, size, or generation. The
   *       following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *       <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>,Amazon EC2 will exclude the entire C5 instance
   *       family, which includes all C5a and C5n instance types. If you specify
   *       <code>m5a.*</code>, Amazon EC2 will exclude all the M5a instance types, but not the M5n
   *       instance types.</p>
   *          <p>Default: No excluded instance types</p>
   */
  ExcludedInstanceTypes?: string[];

  /**
   * <p>Indicates whether current or previous generation instance types are included. The
   *       current generation instance types are recommended for use. Current generation instance types are
   *       typically the latest two to three generations in each instance family. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the
   *       <i>Amazon EC2 User Guide</i>.</p>
   *          <p>For current generation instance types, specify <code>current</code>.</p>
   *          <p>For previous generation instance types, specify <code>previous</code>.</p>
   *          <p>Default: Current and previous generation instance types</p>
   */
  InstanceGenerations?: (InstanceGeneration | string)[];

  /**
   * <p>The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance,
   *          expressed as a percentage above the cheapest M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  SpotMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance,
   *          expressed as a percentage above the cheapest M, C, or R instance type with your specified
   *          attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance
   *          types priced above your threshold.</p>
   *          <p>The parameter accepts an integer, which Amazon EC2 interprets as a percentage.</p>
   *          <p>To turn off price protection, specify a high value, such as <code>999999</code>.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html">GetInstanceTypesFromInstanceRequirements</a>.</p>
   *          <p>Default: <code>20</code>
   *          </p>
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>Indicates whether bare metal instance types must be included, excluded, or required.</p>
   *          <ul>
   *             <li>
   *                <p>To include bare metal instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only bare metal instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude bare metal instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BareMetal?: BareMetal | string;

  /**
   * <p>Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a>.</p>
   *          <ul>
   *             <li>
   *                <p>To include burstable performance instance types, specify <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only burstable performance instance types, specify <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude burstable performance instance types, specify <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BurstablePerformance?: BurstablePerformance | string;

  /**
   * <p>Indicates whether instance types must support hibernation for On-Demand
   *          Instances.</p>
   *          <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html">GetSpotPlacementScores</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * <p>The minimum and maximum number of network interfaces.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCount;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded, or required. For more information,
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon
   *             EC2 instance store</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>To include instance types with instance store volumes, specify
   *                <code>included</code>.</p>
   *             </li>
   *             <li>
   *                <p>To require only instance types with instance store volumes, specify
   *                   <code>required</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude instance types with instance store volumes, specify
   *                <code>excluded</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>included</code>
   *          </p>
   */
  LocalStorage?: LocalStorage | string;

  /**
   * <p>The type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SDD) storage, specify <code>sdd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>hdd</code> and <code>sdd</code>
   *          </p>
   */
  LocalStorageTypes?: (LocalStorageType | string)[];

  /**
   * <p>The minimum and maximum amount of total local storage, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGB;

  /**
   * <p>The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon
   *             EBS–optimized instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps;

  /**
   * <p>The accelerator types that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with inference accelerators, specify <code>inference</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   */
  AcceleratorTypes?: (AcceleratorType | string)[];

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on
   *          an instance.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCount;

  /**
   * <p>Indicates whether instance types must have accelerators by specific manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   */
  AcceleratorManufacturers?: (AcceleratorManufacturer | string)[];

  /**
   * <p>The accelerators that must be on the instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   */
  AcceleratorNames?: (AcceleratorName | string)[];

  /**
   * <p>The minimum and maximum amount of total accelerator memory, in MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB;
}

export namespace InstanceRequirements {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceRequirements): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface PlacementResponse {
  /**
   * <p>The name of the placement group that the instance is in.</p>
   */
  GroupName?: string;
}

export namespace PlacementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes overrides for a launch template.</p>
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * <p>The instance type.</p>
   *          <note>
   *             <p>If you specify <code>InstanceTypes</code>, you can't specify
   *                <code>InstanceRequirements</code>.</p>
   *          </note>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The ID of the subnet in which to launch the instances.</p>
   */
  SubnetId?: string;

  /**
   * <p>The Availability Zone in which to launch the instances.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of units provided by the specified instance type.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The priority for the launch template override. The highest priority is launched
   *          first.</p>
   *          <p>If the On-Demand <code>AllocationStrategy</code> is set to <code>prioritized</code>,
   *          EC2 Fleet uses priority to determine which launch template override to use first in fulfilling
   *          On-Demand capacity.</p>
   *          <p>If the Spot <code>AllocationStrategy</code> is set to
   *             <code>capacity-optimized-prioritized</code>, EC2 Fleet uses priority on a best-effort basis
   *          to determine which launch template override to use in fulfilling Spot capacity, but
   *          optimizes for capacity first.</p>
   *          <p>Valid values are whole numbers starting at <code>0</code>. The lower the number, the
   *          higher the priority. If no number is set, the override has the lowest priority. You can set
   *          the same priority for different launch template overrides.</p>
   */
  Priority?: number;

  /**
   * <p>The location where the instance launched, if applicable.</p>
   */
  Placement?: PlacementResponse;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with those attributes.</p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

export namespace FleetLaunchTemplateOverrides {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FleetLaunchTemplateOverrides): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template and overrides.</p>
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * <p>Any parameters that you specify override the same parameters in the launch
   *          template.</p>
   */
  Overrides?: FleetLaunchTemplateOverrides;
}

export namespace LaunchTemplateAndOverridesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateAndOverridesResponse): any => ({
    ...obj,
  });
}

export enum InstanceLifecycle {
  ON_DEMAND = "on-demand",
  SPOT = "spot",
}

/**
 * <p>Describes the instances that could not be launched by the fleet.</p>
 */
export interface CreateFleetError {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that could not be launched was a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The error code that indicates why the instance could not be launched. For more
   *          information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that describes why the instance could not be launched. For more
   *          information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  ErrorMessage?: string;
}

export namespace CreateFleetError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetError): any => ({
    ...obj,
  });
}

export type PlatformValues = "Windows";

/**
 * <p>Describes the instances that were launched by the fleet.</p>
 */
export interface CreateFleetInstance {
  /**
   * <p>The launch templates and overrides that were used for launching the instances. The
   *          values that you specify in the Overrides replace the values in the launch template.</p>
   */
  LaunchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * <p>Indicates if the instance that was launched is a Spot Instance or On-Demand Instance.</p>
   */
  Lifecycle?: InstanceLifecycle | string;

  /**
   * <p>The IDs of the instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The value is <code>Windows</code> for Windows instances. Otherwise, the value is
   *          blank.</p>
   */
  Platform?: PlatformValues | string;
}

export namespace CreateFleetInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetInstance): any => ({
    ...obj,
  });
}

export interface CreateFleetResult {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Errors?: CreateFleetError[];

  /**
   * <p>Information about the instances that were launched by the fleet. Supported only for
   *             fleets of type <code>instant</code>.</p>
   */
  Instances?: CreateFleetInstance[];
}

export namespace CreateFleetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetResult): any => ({
    ...obj,
  });
}

export enum DestinationFileFormat {
  parquet = "parquet",
  plain_text = "plain-text",
}

/**
 * <p>Describes the destination options for a flow log.</p>
 */
export interface DestinationOptionsRequest {
  /**
   * <p>The format for the flow log. The default is <code>plain-text</code>.</p>
   */
  FileFormat?: DestinationFileFormat | string;

  /**
   * <p>Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3.
   *             The default is <code>false</code>.</p>
   */
  HiveCompatiblePartitions?: boolean;

  /**
   * <p>Indicates whether to partition the flow log per hour. This reduces the cost and response
   *             time for queries. The default is <code>false</code>.</p>
   */
  PerHourPartition?: boolean;
}

export namespace DestinationOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationOptionsRequest): any => ({
    ...obj,
  });
}

export type LogDestinationType = "cloud-watch-logs" | "s3";

export type FlowLogsResourceType = "NetworkInterface" | "Subnet" | "VPC";

export type TrafficType = "ACCEPT" | "ALL" | "REJECT";

export interface CreateFlowLogsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group
   *             in your account.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  DeliverLogsPermissionArn?: string;

  /**
   * <p>The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The ID of the subnet, network interface, or VPC for which you want to create a flow log.</p>
   *         <p>Constraints: Maximum of 1000 resources</p>
   */
  ResourceIds: string[] | undefined;

  /**
   * <p>The type of resource for which to create the flow log. For example, if you specified a VPC ID for
   *             the <code>ResourceId</code> property, specify <code>VPC</code> for this property.</p>
   */
  ResourceType: FlowLogsResourceType | string | undefined;

  /**
   * <p>The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.</p>
   */
  TrafficType: TrafficType | string | undefined;

  /**
   * <p>The type of destination to which the flow log data is to be published. Flow log data can be
   *             published to CloudWatch Logs or Amazon S3. To publish flow log data to CloudWatch Logs, specify <code>cloud-watch-logs</code>. To
   *             publish flow log data to Amazon S3, specify <code>s3</code>.</p>
   *         <p>If you specify <code>LogDestinationType</code> as <code>s3</code>, do not specify
   *             <code>DeliverLogsPermissionArn</code> or <code>LogGroupName</code>.</p>
   *         <p>Default: <code>cloud-watch-logs</code>
   *          </p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The destination to which the flow log data is to be published. Flow log data can be published
   *             to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified
   *             for <code>LogDestinationType</code>.</p>
   *         <p>If <code>LogDestinationType</code> is not specified or <code>cloud-watch-logs</code>,
   *             specify the Amazon Resource Name (ARN) of the CloudWatch Logs log group. For example, to publish
   *             to a log group called <code>my-logs</code>, specify
   *             <code>arn:aws:logs:us-east-1:123456789012:log-group:my-logs</code>. Alternatively,
   *             use <code>LogGroupName</code> instead.</p>
   *         <p>If LogDestinationType is <code>s3</code>, specify the ARN of the Amazon S3 bucket. You can also specify a
   *             subfolder in the bucket. To specify a subfolder in the bucket, use the following  ARN format:
   *             <code>bucket_ARN/subfolder_name/</code>. For example, to specify a subfolder named <code>my-logs</code> in a
   *             bucket named <code>my-bucket</code>, use the following ARN: <code>arn:aws:s3:::my-bucket/my-logs/</code>. You
   *             cannot use <code>AWSLogs</code> as a subfolder name. This is a reserved term.</p>
   */
  LogDestination?: string;

  /**
   * <p>The fields to include in the flow log record, in the order in which they should
   *             appear. For a list of available fields, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log records</a>. If you
   *             omit this parameter, the flow log is created using the default format. If you specify this parameter,
   *             you must specify at least one field.</p>
   *         <p>Specify the fields using the <code>${field-id}</code> format, separated by spaces. For
   *             the CLI, surround this parameter value with single quotes on Linux or
   *             double quotes on Windows.</p>
   */
  LogFormat?: string;

  /**
   * <p>The tags to apply to the flow logs.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).</p>
   *         <p>When a network interface is attached to a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based
   *                 instance</a>, the aggregation interval is always 60 seconds or less, regardless
   *             of the value that you specify.</p>
   *         <p>Default: 600</p>
   */
  MaxAggregationInterval?: number;

  /**
   * <p>The destination options.</p>
   */
  DestinationOptions?: DestinationOptionsRequest;
}

export namespace CreateFlowLogsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowLogsRequest): any => ({
    ...obj,
  });
}

export interface CreateFlowLogsResult {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IDs of the flow logs.</p>
   */
  FlowLogIds?: string[];

  /**
   * <p>Information about the flow logs that could not be created successfully.</p>
   */
  Unsuccessful?: UnsuccessfulItem[];
}

export namespace CreateFlowLogsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowLogsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a storage location in Amazon S3.</p>
 */
export interface StorageLocation {
  /**
   * <p>The name of the S3 bucket.</p>
   */
  Bucket?: string;

  /**
   * <p>The key.</p>
   */
  Key?: string;
}

export namespace StorageLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageLocation): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.</p>
   */
  InputStorageLocation: StorageLocation | undefined;

  /**
   * <p>The location in Amazon S3 for the output logs.</p>
   */
  LogsStorageLocation?: StorageLocation;

  /**
   * <p>A description for the AFI.</p>
   */
  Description?: string;

  /**
   * <p>A name for the AFI.</p>
   */
  Name?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags to apply to the FPGA image during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateFpgaImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFpgaImageRequest): any => ({
    ...obj,
  });
}

export interface CreateFpgaImageResult {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;
}

export namespace CreateFpgaImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFpgaImageResult): any => ({
    ...obj,
  });
}

export type VolumeType = "gp2" | "gp3" | "io1" | "io2" | "sc1" | "st1" | "standard";

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface EbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination">Preserving Amazon EBS volumes on instance termination</a> in the
   *             <i>Amazon EC2 User Guide</i>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this
   *             represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this
   *             represents the baseline performance of the volume and the rate at which the volume accumulates
   *             I/O credits for bursting.</p>
   *         <p>The following are the supported values for each volume type:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *         <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS only for
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families guarantee performance
   *             up to 32,000 IOPS.</p>
   *         <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *             The default for <code>gp3</code> volumes is 3,000 IOPS.
   *             This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *             If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *             size that is equal to or larger than the snapshot size.</p>
   *         <p>The following are the supported volumes sizes for each volume type:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>:1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *             <i>Amazon EC2 User Guide</i>. If the volume type is <code>io1</code> or <code>io2</code>,
   *             you must specify the IOPS that the volume supports.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under
   *             which the EBS volume is encrypted.</p>
   *         <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>,
   *             and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   *     	    <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *     	    <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being
   *             restored from a backing snapshot.
   *             The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS encryption</a>
   *             in the <i>Amazon EC2 User Guide</i>.</p>
   *         <p>In no case can you remove encryption from an encrypted volume.</p>
   *         <p>Encrypted volumes can only be attached to instances that support Amazon EBS
   *             encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
   *         <p>This parameter is not returned by .</p>
   */
  Encrypted?: boolean;
}

export namespace EbsBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping, which defines the EBS volumes and instance store
 *             volumes to attach to an instance at launch.</p>
 */
export interface BlockDeviceMapping {
  /**
   * <p>The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (<code>ephemeral</code>N). Instance store volumes are numbered
   *             starting from 0. An instance type with 2 available instance store volumes can specify
   *             mappings for <code>ephemeral0</code> and <code>ephemeral1</code>. The number of
   *             available instance store volumes depends on the instance type. After you connect to the
   *             instance, you must mount the volume.</p>
   *         <p>NVMe instance store volumes are automatically enumerated and assigned a device name.
   *             Including them in your block device mapping has no effect.</p>
   *         <p>Constraints: For M3 instances, you must specify instance store volumes in the block
   *             device mapping for the instance. When you launch an M3 instance, we ignore any instance
   *             store volumes specified in the block device mapping for the AMI.</p>
   */
  VirtualName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is
   *             launched.</p>
   */
  Ebs?: EbsBlockDevice;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string. When this
   *             property is specified, the device is removed from the block device mapping regardless of
   *             the assigned value.</p>
   */
  NoDevice?: string;
}

export namespace BlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlockDeviceMapping): any => ({
    ...obj,
  });
}

export interface CreateImageRequest {
  /**
   * <p>The block device mappings. This parameter cannot be used to modify the encryption
   *    		status of existing volumes or snapshots. To create an AMI with encrypted snapshots,
   *    		use the <a>CopyImage</a> action.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>A description for the new image.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *        and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *        Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A name for the new image.</p>
   *          <p>Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</p>
   */
  Name: string | undefined;

  /**
   * <p>By default, Amazon EC2 attempts to shut down and reboot the instance before creating the image.
   *        If the <code>No Reboot</code> option is set, Amazon EC2 doesn't shut down the instance before creating
   *        the image. Without a reboot, the AMI will be crash consistent (all the volumes are snapshotted
   *        at the same time), but not application consistent (all the operating system buffers are not flushed
   *        to disk before the snapshots are created).</p>
   */
  NoReboot?: boolean;

  /**
   * <p>The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be
   *           <code>image</code>.</p>
   *             </li>
   *             <li>
   *       	        <p>To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that
   *           are attached to the instance, the value for <code>ResourceType</code> must be
   *             <code>snapshot</code>. The same tag is applied to all of the snapshots that are
   *           created.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify other values for <code>ResourceType</code>, the request fails.</p>
   *          <p>To tag an AMI or snapshot after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>. </p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageRequest): any => ({
    ...obj,
  });
}

export interface CreateImageResult {
  /**
   * <p>The ID of the new AMI.</p>
   */
  ImageId?: string;
}

export namespace CreateImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>The start day and time and the end day and time of the time range, in UTC.</p>
 */
export interface InstanceEventWindowTimeRangeRequest {
  /**
   * <p>The day on which the time range begins.</p>
   */
  StartWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range begins.</p>
   */
  StartHour?: number;

  /**
   * <p>The day on which the time range ends.</p>
   */
  EndWeekDay?: WeekDay | string;

  /**
   * <p>The hour when the time range ends.</p>
   */
  EndHour?: number;
}

export namespace InstanceEventWindowTimeRangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceEventWindowTimeRangeRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceEventWindowRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the event window.</p>
   */
  Name?: string;

  /**
   * <p>The time range for the event window. If you specify a time range, you can't specify a cron
   *          expression.</p>
   */
  TimeRanges?: InstanceEventWindowTimeRangeRequest[];

  /**
   * <p>The cron expression for the event window, for example, <code>* 0-4,20-23 * * 1,5</code>. If
   *          you specify a cron expression, you can't specify a time range.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Only hour and day of the week values are supported.</p>
   *             </li>
   *             <li>
   *                <p>For day of the week values, you can specify either integers <code>0</code> through
   *                   <code>6</code>, or alternative single values <code>SUN</code> through
   *                   <code>SAT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The minute, month, and year must be specified by <code>*</code>.</p>
   *             </li>
   *             <li>
   *                <p>The hour value must be one or a multiple range, for example, <code>0-4</code> or
   *             <code>0-4,20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>Each hour range must be >= 2 hours, for example, <code>0-2</code> or
   *             <code>20-23</code>.</p>
   *             </li>
   *             <li>
   *                <p>The event window must be >= 4 hours. The combined total time ranges in the event
   *                window must be >= 4 hours.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about cron expressions, see <a href="https://en.wikipedia.org/wiki/Cron">cron</a> on the <i>Wikipedia
   *             website</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>The tags to apply to the event window.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateInstanceEventWindowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceEventWindowRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceEventWindowResult {
  /**
   * <p>Information about the event window.</p>
   */
  InstanceEventWindow?: InstanceEventWindow;
}

export namespace CreateInstanceEventWindowResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceEventWindowResult): any => ({
    ...obj,
  });
}

export type ContainerFormat = "ova";

export type DiskImageFormat = "RAW" | "VHD" | "VMDK";

/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportToS3TaskSpecification {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
   *    WRITE and READ_ACP permissions to the Amazon Web Services account <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The image is written to a single object in the Amazon S3 bucket at the S3 key s3prefix +
   *    exportTaskId + '.' + diskImageFormat.</p>
   */
  S3Prefix?: string;
}

export namespace ExportToS3TaskSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportToS3TaskSpecification): any => ({
    ...obj,
  });
}

export type ExportEnvironment = "citrix" | "microsoft" | "vmware";

export interface CreateInstanceExportTaskRequest {
  /**
   * <p>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</p>
   */
  Description?: string;

  /**
   * <p>The format and location for an export instance task.</p>
   */
  ExportToS3Task: ExportToS3TaskSpecification | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment: ExportEnvironment | string | undefined;

  /**
   * <p>The tags to apply to the export instance task during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateInstanceExportTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the format and location for the export task.</p>
 */
export interface ExportToS3Task {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is
   *    exported.</p>
   */
  ContainerFormat?: ContainerFormat | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: DiskImageFormat | string;

  /**
   * <p>The Amazon S3 bucket for the destination image. The destination bucket must exist and grant
   *    WRITE and READ_ACP permissions to the Amazon Web Services account <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The encryption key for your S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace ExportToS3Task {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportToS3Task): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance to export.</p>
 */
export interface InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: ExportEnvironment | string;
}

export namespace InstanceExportDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceExportDetails): any => ({
    ...obj,
  });
}

export type ExportTaskState = "active" | "cancelled" | "cancelling" | "completed";

/**
 * <p>Describes an export instance task.</p>
 */
export interface ExportTask {
  /**
   * <p>A description of the resource being exported.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the export task.</p>
   */
  ExportTaskId?: string;

  /**
   * <p>Information about the export task.</p>
   */
  ExportToS3Task?: ExportToS3Task;

  /**
   * <p>Information about the instance to export.</p>
   */
  InstanceExportDetails?: InstanceExportDetails;

  /**
   * <p>The state of the export task.</p>
   */
  State?: ExportTaskState | string;

  /**
   * <p>The status message related to the export task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags for the export task.</p>
   */
  Tags?: Tag[];
}

export namespace ExportTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTask): any => ({
    ...obj,
  });
}

export interface CreateInstanceExportTaskResult {
  /**
   * <p>Information about the export instance task.</p>
   */
  ExportTask?: ExportTask;
}

export namespace CreateInstanceExportTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceExportTaskResult): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayRequest {
  /**
   * <p>The tags to assign to the internet gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateInternetGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInternetGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an internet gateway.</p>
 */
export interface InternetGateway {
  /**
   * <p>Any VPCs attached to the internet gateway.</p>
   */
  Attachments?: InternetGatewayAttachment[];

  /**
   * <p>The ID of the internet gateway.</p>
   */
  InternetGatewayId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the internet gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>Any tags assigned to the internet gateway.</p>
   */
  Tags?: Tag[];
}

export namespace InternetGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternetGateway): any => ({
    ...obj,
  });
}

export interface CreateInternetGatewayResult {
  /**
   * <p>Information about the internet gateway.</p>
   */
  InternetGateway?: InternetGateway;
}

export namespace CreateInternetGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInternetGatewayResult): any => ({
    ...obj,
  });
}

export enum KeyType {
  ed25519 = "ed25519",
  rsa = "rsa",
}

export interface CreateKeyPairRequest {
  /**
   * <p>A unique name for the key pair.</p>
   * 	        <p>Constraints: Up to 255 ASCII characters</p>
   */
  KeyName: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of key pair. Note that ED25519 keys are not supported for Windows instances, EC2 Instance Connect, and EC2 Serial Console.</p>
   *         <p>Default: <code>rsa</code>
   *          </p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>The tags to apply to the new key pair.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  /**
   * <p>The SHA-1 digest of the DER encoded private key.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>An unencrypted PEM encoded RSA or ED25519 private key.</p>
   */
  KeyMaterial?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The ID of the key pair.</p>
   */
  KeyPairId?: string;

  /**
   * <p>Any tags applied to the key pair.</p>
   */
  Tags?: Tag[];
}

export namespace KeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
    ...(obj.KeyMaterial && { KeyMaterial: SENSITIVE_STRING }),
  });
}

/**
 * <p>The parameters for a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * <p>Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption.
   *             If you are creating a volume from a snapshot, you can't specify an encryption value.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code>
   *             volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes,
   *             this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits
   *             for bursting.</p>
   *         <p>The following are the supported values for each volume type:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *         <p>For <code>io1</code> and <code>io2</code> volumes, we guarantee 64,000 IOPS
   *             only for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families guarantee performance up
   *             to 32,000 IOPS.</p>
   *         <p>This parameter is supported for <code>io1</code>, <code>io2</code>, and <code>gp3</code> volumes only. This parameter is not supported for
   *             <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the symmetric Key Management Service (KMS) CMK used for
   *             encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following
   *             are the supported volumes sizes for each volume type:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput to provision for a <code>gp3</code> volume, with a maximum of 1,000 MiB/s.</p>
   *     	    <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;
}

export namespace LaunchTemplateEbsBlockDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEbsBlockDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * <p>The device name (for example, /dev/sdh or xvdh).</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0.
   *             An instance type with 2 available instance store volumes can specify mappings for ephemeral0
   *             and ephemeral1. The number of available instance store volumes depends on the instance type.
   *             After you connect to the instance, you must mount the volume.</p>
   */
  VirtualName?: string;

  /**
   * <p>Parameters used to automatically set up EBS volumes when the instance is launched.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDeviceRequest;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

export namespace LaunchTemplateBlockDeviceMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateBlockDeviceMappingRequest): any => ({
    ...obj,
  });
}

export type CapacityReservationPreference = "none" | "open";

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTarget {
  /**
   * <p>The ID of the Capacity Reservation in which to run the instance.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

export namespace CapacityReservationTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the
 * 			<code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or
 * 			to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
 * 			Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or
 * 			a Capacity Reservation group.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance
   * 				runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTarget;
}

export namespace LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCapacityReservationSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance. Both the core count and threads per core
 * 			must be specified in the request.</p>
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core. To disable multithreading
   * 			for the instance, specify a value of 1. Otherwise, specify the default value of 2.</p>
   */
  ThreadsPerCore?: number;
}

export namespace LaunchTemplateCpuOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCpuOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecificationRequest {
  /**
   * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits: string | undefined;
}

export namespace CreditSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreditSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A specification for an Elastic Graphics accelerator.</p>
 */
export interface ElasticGpuSpecification {
  /**
   * <p>The type of Elastic Graphics accelerator. For more information about the values to specify for
   *             <code>Type</code>, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics">Elastic Graphics Basics</a>, specifically the Elastic Graphics accelerator column, in the
   *             <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.</p>
   */
  Type: string | undefined;
}

export namespace ElasticGpuSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes an elastic inference accelerator.
 *         </p>
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * <p>
   *             The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *         </p>
   */
  Type: string | undefined;

  /**
   * <p>
   *     		The number of elastic inference accelerators to attach to the instance.
   *     	</p>
   *     	    <p>Default: 1</p>
   */
  Count?: number;
}

export namespace LaunchTemplateElasticInferenceAccelerator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateElasticInferenceAccelerator): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information,
 * 		see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
 * 			What is Amazon Web Services Nitro Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * <p>To enable the instance for Amazon Web Services Nitro Enclaves, set this parameter to <code>true</code>.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplateEnclaveOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEnclaveOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is configured for hibernation. This parameter is valid only
 *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
 *                 prerequisites</a>.</p>
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * <p>If you set this parameter to <code>true</code>, the instance is enabled for hibernation.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  Configured?: boolean;
}

export namespace LaunchTemplateHibernationOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateHibernationOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export namespace LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateIamInstanceProfileSpecificationRequest): any => ({
    ...obj,
  });
}

export type ShutdownBehavior = "stop" | "terminate";

export type MarketType = "spot";

export type InstanceInterruptionBehavior = "hibernate" | "stop" | "terminate";

export type SpotInstanceType = "one-time" | "persistent";

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request.
   *             For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached.
   *             If the request is persistent, it remains active until it is canceled or this date and time is reached.
   *             The default end date is 7 days from the current date.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted. The default is <code>terminate</code>.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace LaunchTemplateSpotMarketOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}

export namespace LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfigurationRequest): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataEndpointState = "disabled" | "enabled";

export enum LaunchTemplateInstanceMetadataProtocolIpv6 {
  disabled = "disabled",
  enabled = "enabled",
}

export enum LaunchTemplateHttpTokensState {
  optional = "optional",
  required = "required",
}

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.</p>
   *             <p>If the state is <code>required</code>, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   *         <p>Default: 1</p>
   *         <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.
   * </p>
   *          </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *         <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | string;
}

export namespace LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * <p>Specify <code>true</code> to enable detailed monitoring. Otherwise, basic monitoring is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoringRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoringRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv4PrefixSpecificationRequest {
  /**
   * <p>The IPv4 prefix. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
   *             Assigning prefixes to Amazon EC2 network interfaces</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  Ipv4Prefix?: string;
}

export namespace Ipv4PrefixSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv4PrefixSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6AddressRequest {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace InstanceIpv6AddressRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv6AddressRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IPv4 prefix option for a network interface.</p>
 */
export interface Ipv6PrefixSpecificationRequest {
  /**
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

export namespace Ipv6PrefixSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6PrefixSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a secondary private IPv4 address for a network interface.</p>
 */
export interface PrivateIpAddressSpecification {
  /**
   * <p>Indicates whether the private IPv4 address is the primary private IPv4 address. Only
   *             one IPv4 address can be designated as primary.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private IPv4 addresses.</p>
   */
  PrivateIpAddress?: string;
}

export namespace PrivateIpAddressSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrivateIpAddressSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The parameters for a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * <p>Associates a Carrier IP address with eth0 for a new network interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *                 Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Associates a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">Elastic Fabric Adapter</a> in the
   * 			<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   * 		       <p>If you are not creating an EFA, specify <code>interface</code> or omit this parameter.</p>
   * 		       <p>Valid values: <code>interface</code> | <code>efa</code>
   *          </p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card. Some instance types support multiple network cards.
   *             The primary network interface must be assigned to network card index 0.
   *             The default is network card index 0.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 prefixes to be assigned to the network interface. You cannot use
   *             this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 prefixes to be automatically assigned to the
   *             network interface. You cannot use this option if you use the <code>Ipv4Prefix</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes to be assigned to the network interface. You cannot
   *             use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 prefixes to be automatically assigned to the network
   *             interface. You cannot use this option if you use the <code>Ipv6Prefix</code> option.</p>
   */
  Ipv6PrefixCount?: number;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for an instance on a Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy
   *         	of dedicated runs on single-tenant hardware.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances. If you specify a host
   * 		resource group ARN, omit the <b>Tenancy</b> parameter
   * 		or set it to <code>host</code>.</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;
}

export namespace LaunchTemplatePlacementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePlacementRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * <p>The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name must
   *             be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS name must
   *             be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use
   *             the instance IPv4 address or the instance ID.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace LaunchTemplatePrivateDnsNameOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePrivateDnsNameOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The tags specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * <p>The type of resource to tag. Currently, the resource types that support tagging on
   *             creation are <code>instance</code> and <code>volume</code>. To tag a resource after it
   *         	has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecificationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The information to include in the launch template.</p>
 */
export interface RequestLaunchTemplateData {
  /**
   * <p>The ID of the kernel.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization
   *             provides dedicated throughput to Amazon EBS and an optimized configuration stack to
   *             provide optimal Amazon EBS I/O performance. This optimization isn't available with all
   *             instance types. Additional usage charges apply when using an EBS-optimized
   *             instance.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or Amazon Resource Name (ARN) of an IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * <p>The block device mapping.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * <p>One or more network interfaces. If you specify a network interface, you must specify
   *             any security groups and subnets as part of the network interface.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *         <p>If you specify <code>InstanceTypes</code>, you can't specify
   *                 <code>InstanceRequirements</code>.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair. You can create a key pair using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html">CreateKeyPair</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html">ImportKeyPair</a>.</p>
   *         <important>
   *             <p>If you do not specify a key pair, you can't connect to the instance unless you
   *                 choose an AMI that is configured to allow users another way to log in.</p>
   *         </important>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * <p>The placement for the instance.</p>
   */
  Placement?: LaunchTemplatePlacementRequest;

  /**
   * <p>The ID of the RAM disk.</p>
   *         <important>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html">User Provided
   *                     Kernels</a> in the <i>Amazon Elastic Compute Cloud User
   *                     Guide</i>.</p>
   *         </important>
   */
  RamDiskId?: string;

  /**
   * <p>If you set this parameter to <code>true</code>, you can't terminate the instance using
   *     		the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch,
   *     		use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html">ModifyInstanceAttribute</a>.
   *     		Alternatively, if you set <code>InstanceInitiatedShutdownBehavior</code> to
   *     		<code>terminate</code>, you can terminate the instance by running the shutdown
   *     		command from the instance.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from
   *             the instance (using the operating system command for system shutdown).</p>
   *         <p>Default: <code>stop</code>
   *         </p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data to make available to the instance. You must provide base64-encoded text.
   *             User data is limited to 16 KB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html">Running Commands on Your Linux Instance
   *                 at Launch</a> (Linux) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html#instancedata-add-user-data">Adding User Data</a> (Windows).</p>
   *
   *         <p>If you are creating the launch template for use with Batch, the user data
   *             must be provided in the <a href="https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive">
   *                 MIME multi-part archive format</a>.  For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html">Amazon EC2 user data in
   *                     launch templates</a> in the <i>Batch User Guide</i>.</p>
   */
  UserData?: string;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and
   *             volumes on launch. The specified tags are applied to all instances or volumes that are
   *             created during launch. To tag a resource after it has been created, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html">CreateTags</a>.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecificationRequest[];

  /**
   * <p>An elastic GPU to associate with the instance.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * <p>
   *             The elastic inference accelerator for the instance.
   *         </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * <p>One or more security group IDs. You can create a security group using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html">CreateSecurityGroup</a>. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>[EC2-Classic, default VPC] One or more security group names. For a nondefault VPC,
   *             you must use security group IDs instead. You cannot specify both a security group ID and
   *             security name in the same request.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * <p>The credit option for CPU usage of the instance. Valid for T2, T3, or T3a instances
   *             only.</p>
   */
  CreditSpecification?: CreditSpecificationRequest;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU Options</a> in the <i>Amazon Elastic Compute Cloud User
   * 				Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * <p>The Capacity Reservation targeting option. If you do not specify this parameter, the
   * 			instance's Capacity Reservation preference defaults to <code>open</code>, which enables it
   * 			to run in any open Capacity Reservation that has matching attributes (instance type,
   * 			platform, Availability Zone).</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * <p>Indicates whether an instance is enabled for hibernation. This parameter is valid only
   *             if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation
   *                 prerequisites</a>. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the
   *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information,
   * 			see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html">
   * 				What is Amazon Web Services Nitro Enclaves?</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
   * 		       <p>You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptionsRequest;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *             <code>InstanceTypes</code>.</p>
   */
  InstanceRequirements?: InstanceRequirementsRequest;

  /**
   * <p>The options for the instance hostname. The default values are inherited from the subnet.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptionsRequest;
}

export namespace RequestLaunchTemplateData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestLaunchTemplateData): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>A name for the launch template.</p>
   */
  LaunchTemplateName: string | undefined;

  /**
   * <p>A description for the first version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;

  /**
   * <p>The tags to apply to the launch template during creation.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateLaunchTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The time launch template was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the launch template. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The version number of the default version of the launch template.</p>
   */
  DefaultVersionNumber?: number;

  /**
   * <p>The version number of the latest version of the launch template.</p>
   */
  LatestVersionNumber?: number;

  /**
   * <p>The tags for the launch template.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.</p>
 */
export interface ValidationError {
  /**
   * <p>The error code that indicates why the parameter or parameter combination is not valid. For more information about error codes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  Code?: string;

  /**
   * <p>The error message that describes why the parameter or parameter combination is not valid. For more
   *             information about error messages, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html.html">Error Codes</a>.</p>
   */
  Message?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * <p>The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.</p>
 */
export interface ValidationWarning {
  /**
   * <p>The error codes and error messages.</p>
   */
  Errors?: ValidationError[];
}

export namespace ValidationWarning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationWarning): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateResult {
  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * <p>If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateResult): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraint: Maximum 128 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>The ID of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either the launch template ID or
   *             launch template name in the request.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number of the launch template version on which to base the new version.
   *             The new version inherits the same launch parameters as the source version, except for
   *             parameters that you specify in <code>LaunchTemplateData</code>. Snapshots applied
   *             to the block device mapping are ignored when creating a new version unless they
   *             are explicitly included.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A description for the version of the launch template.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The information for the launch template.</p>
   */
  LaunchTemplateData: RequestLaunchTemplateData | undefined;
}

export namespace CreateLaunchTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the Key Management Service (KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace LaunchTemplateEbsBlockDevice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The virtual device name (ephemeralN).</p>
   */
  VirtualName?: string;

  /**
   * <p>Information about the block device for an EBS volume.</p>
   */
  Ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * <p>To omit the device from the block device mapping, specify an empty string.</p>
   */
  NoDevice?: string;
}

export namespace LaunchTemplateBlockDeviceMapping {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateBlockDeviceMapping): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a target Capacity Reservation or Capacity Reservation group.</p>
 */
export interface CapacityReservationTargetResponse {
  /**
   * <p>The ID of the targeted Capacity Reservation.</p>
   */
  CapacityReservationId?: string;

  /**
   * <p>The ARN of the targeted Capacity Reservation group.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

export namespace CapacityReservationTargetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityReservationTargetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Capacity Reservation targeting option.</p>
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any <code>open</code> Capacity Reservation that has matching attributes
   * 				(instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if one is available. The instance
   * 				runs in On-Demand capacity.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: CapacityReservationPreference | string;

  /**
   * <p>Information about the target Capacity Reservation or Capacity Reservation group.</p>
   */
  CapacityReservationTarget?: CapacityReservationTargetResponse;
}

export namespace LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCapacityReservationSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CPU options for the instance.</p>
 */
export interface LaunchTemplateCpuOptions {
  /**
   * <p>The number of CPU cores for the instance.</p>
   */
  CoreCount?: number;

  /**
   * <p>The number of threads per CPU core.</p>
   */
  ThreadsPerCore?: number;
}

export namespace LaunchTemplateCpuOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateCpuOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the credit option for CPU usage of a T2, T3, or T3a instance.</p>
 */
export interface CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T2, T3, or T3a instance. Valid values are
   *                 <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export namespace CreditSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreditSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an elastic GPU.</p>
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * <p>The elastic GPU type.</p>
   */
  Type?: string;
}

export namespace ElasticGpuSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticGpuSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes an elastic inference accelerator.
 *         </p>
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * <p>
   *             The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *         </p>
   */
  Type?: string;

  /**
   * <p>
   *     		The number of elastic inference accelerators to attach to the instance.
   *     	</p>
   *     	    <p>Default: 1</p>
   */
  Count?: number;
}

export namespace LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateElasticInferenceAcceleratorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for Amazon Web Services Nitro Enclaves;
   * 		otherwise, it is not enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplateEnclaveOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateEnclaveOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether an instance is configured for hibernation.</p>
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * <p>If this parameter is set to <code>true</code>, the instance is enabled for hibernation; otherwise, it is not enabled for hibernation.</p>
   */
  Configured?: boolean;
}

export namespace LaunchTemplateHibernationOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateHibernationOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IAM instance profile.</p>
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the instance profile.</p>
   */
  Name?: string;
}

export namespace LaunchTemplateIamInstanceProfileSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateIamInstanceProfileSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The options for Spot Instances.</p>
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * <p>The maximum hourly price you're willing to pay for the Spot Instances.</p>
   */
  MaxPrice?: string;

  /**
   * <p>The Spot Instance request type.</p>
   */
  SpotInstanceType?: SpotInstanceType | string;

  /**
   * <p>The required duration for the Spot Instances (also known as Spot blocks), in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360).</p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p>The end date of the request. For a one-time request, the request remains active until all instances launch, the request is canceled, or this date is reached. If the request is persistent, it remains active until it is canceled or this date and time is reached.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The behavior when a Spot Instance is interrupted.</p>
   */
  InstanceInterruptionBehavior?: InstanceInterruptionBehavior | string;
}

export namespace LaunchTemplateSpotMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateSpotMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The market (purchasing) option for the instances.</p>
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * <p>The market type.</p>
   */
  MarketType?: MarketType | string;

  /**
   * <p>The options for Spot Instances.</p>
   */
  SpotOptions?: LaunchTemplateSpotMarketOptions;
}

export namespace LaunchTemplateInstanceMarketOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMarketOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a license configuration.</p>
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the license configuration.</p>
   */
  LicenseConfigurationArn?: string;
}

export namespace LaunchTemplateLicenseConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateLicenseConfiguration): any => ({
    ...obj,
  });
}

export type LaunchTemplateInstanceMetadataOptionsState = "applied" | "pending";

/**
 * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * <p>The state of the metadata option changes.</p>
   *          <p>
   *             <code>pending</code> - The metadata options are being updated and the instance is not ready to process metadata traffic with the new selection.</p>
   *          <p>
   *             <code>applied</code> - The metadata options have been successfully applied on the instance.</p>
   */
  State?: LaunchTemplateInstanceMetadataOptionsState | string;

  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is <code>optional</code>.</p>
   *         <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.</p>
   *         <p>If the state is <code>required</code>, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.</p>
   */
  HttpTokens?: LaunchTemplateHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   *          <p>Possible values: Integers from 1 to 64</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is <code>enabled</code>.</p>
   *         <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access your instance metadata.
   *             </p>
   *         </note>
   */
  HttpEndpoint?: LaunchTemplateInstanceMetadataEndpointState | string;

  /**
   * <p>Enables or disables the IPv6 endpoint for the instance metadata service.</p>
   *         <p>Default: <code>disabled</code>
   *          </p>
   */
  HttpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6 | string;
}

export namespace LaunchTemplateInstanceMetadataOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceMetadataOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the monitoring for the instance.</p>
 */
export interface LaunchTemplatesMonitoring {
  /**
   * <p>Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

export namespace LaunchTemplatesMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatesMonitoring): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the IPv4 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv4PrefixSpecificationResponse {
  /**
   * <p>One or more IPv4 delegated prefixes assigned to the network interface.</p>
   */
  Ipv4Prefix?: string;
}

export namespace Ipv4PrefixSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv4PrefixSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an IPv6 address.</p>
 */
export interface InstanceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace InstanceIpv6Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the IPv6 delegated prefixes assigned
 *             to a network interface.</p>
 */
export interface Ipv6PrefixSpecificationResponse {
  /**
   * <p>One or more IPv6 delegated prefixes assigned to the network interface.</p>
   */
  Ipv6Prefix?: string;
}

export namespace Ipv6PrefixSpecificationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6PrefixSpecificationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface.</p>
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * <p>Indicates whether to associate a Carrier IP address with eth0 for a new network interface.</p>
   *         <p>Use this option when you launch an instance in a Wavelength Zone and want to associate
   *             a Carrier IP address with the network interface. For more information about Carrier IP
   *             addresses, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip">Carrier IP addresses</a> in the <i>Wavelength Developer
   *                     Guide</i>.</p>
   */
  AssociateCarrierIpAddress?: boolean;

  /**
   * <p>Indicates whether to associate a public IPv4 address with eth0 for a new network interface.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>The device index for the network interface attachment.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: string;

  /**
   * <p>The number of IPv6 addresses for the network interface.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>The IPv6 addresses for the network interface.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The primary private IPv4 address of the network interface.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses for the network interface.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>The ID of the subnet for the network interface.</p>
   */
  SubnetId?: string;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigned to the
   *             network interface.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigned to the network
   *             interface.</p>
   */
  Ipv6PrefixCount?: number;
}

export namespace LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateInstanceNetworkInterfaceSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the placement of an instance.</p>
 */
export interface LaunchTemplatePlacement {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The affinity setting for the instance on the Dedicated Host.</p>
   */
  Affinity?: string;

  /**
   * <p>The name of the placement group for the instance.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the Dedicated Host for the instance.</p>
   */
  HostId?: string;

  /**
   * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware. </p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>Reserved for future use.</p>
   */
  SpreadDomain?: string;

  /**
   * <p>The ARN of the host resource group in which to launch the instances.
   *     	</p>
   */
  HostResourceGroupArn?: string;

  /**
   * <p>The number of the partition the instance should launch in. Valid only if the placement group strategy is set to <code>partition</code>.</p>
   */
  PartitionNumber?: number;
}

export namespace LaunchTemplatePlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for instance hostnames.</p>
 */
export interface LaunchTemplatePrivateDnsNameOptions {
  /**
   * <p>The type of hostname to assign to an instance.</p>
   */
  HostnameType?: HostnameType | string;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</p>
   */
  EnableResourceNameDnsARecord?: boolean;

  /**
   * <p>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</p>
   */
  EnableResourceNameDnsAAAARecord?: boolean;
}

export namespace LaunchTemplatePrivateDnsNameOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplatePrivateDnsNameOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The tag specification for the launch template.</p>
 */
export interface LaunchTemplateTagSpecification {
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

export namespace LaunchTemplateTagSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateTagSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The information for a launch template. </p>
 */
export interface ResponseLaunchTemplateData {
  /**
   * <p>The ID of the kernel, if applicable.</p>
   */
  KernelId?: string;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O. </p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * <p>The block device mappings.</p>
   */
  BlockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * <p>The network interfaces.</p>
   */
  NetworkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * <p>The ID of the AMI that was used to launch the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: LaunchTemplatesMonitoring;

  /**
   * <p>The placement of the instance.</p>
   */
  Placement?: LaunchTemplatePlacement;

  /**
   * <p>The ID of the RAM disk, if applicable.</p>
   */
  RamDiskId?: string;

  /**
   * <p>If set to <code>true</code>, indicates that the instance cannot be terminated using
   *             the Amazon EC2 console, command line tool, or API.</p>
   */
  DisableApiTermination?: boolean;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from
   *             the instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: ShutdownBehavior | string;

  /**
   * <p>The user data for the instance. </p>
   */
  UserData?: string;

  /**
   * <p>The tags.</p>
   */
  TagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * <p>The elastic GPU specification.</p>
   */
  ElasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * <p>
   *             The elastic inference accelerator for the instance.
   *         </p>
   */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * <p>The security group IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The security group names.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The market (purchasing) option for the instances.</p>
   */
  InstanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * <p>The credit option for CPU usage of the instance.</p>
   */
  CreditSpecification?: CreditSpecification;

  /**
   * <p>The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User
   * 				Guide</i>.</p>
   */
  CpuOptions?: LaunchTemplateCpuOptions;

  /**
   * <p>Information about the Capacity Reservation targeting option.</p>
   */
  CapacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * <p>The license configurations.</p>
   */
  LicenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * <p>Indicates whether an instance is configured for hibernation. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate
   *                 your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * <p>The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
   *             <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MetadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * <p>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</p>
   */
  EnclaveOptions?: LaunchTemplateEnclaveOptions;

  /**
   * <p>The attributes for the instance types. When you specify instance attributes, Amazon EC2 will
   *          identify instance types with these attributes.</p>
   *          <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *          <code>InstanceTypes</code>.</p>
   */
  InstanceRequirements?: InstanceRequirements;

  /**
   * <p>The options for the instance hostname.</p>
   */
  PrivateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;
}

export namespace ResponseLaunchTemplateData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseLaunchTemplateData): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a launch template version.</p>
 */
export interface LaunchTemplateVersion {
  /**
   * <p>The ID of the launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The description for the version.</p>
   */
  VersionDescription?: string;

  /**
   * <p>The time the version was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The principal that created the version.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the version is the default version.</p>
   */
  DefaultVersion?: boolean;

  /**
   * <p>Information about the launch template.</p>
   */
  LaunchTemplateData?: ResponseLaunchTemplateData;
}

export namespace LaunchTemplateVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchTemplateVersion): any => ({
    ...obj,
  });
}

export interface CreateLaunchTemplateVersionResult {
  /**
   * <p>Information about the launch template version.</p>
   */
  LaunchTemplateVersion?: LaunchTemplateVersion;

  /**
   * <p>If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.</p>
   */
  Warning?: ValidationWarning;
}

export namespace CreateLaunchTemplateVersionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchTemplateVersionResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on
   *         the most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteRequest): any => ({
    ...obj,
  });
}

export type LocalGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

export type LocalGatewayRouteType = "propagated" | "static";

/**
 * <p>Describes a route for a local gateway route table.</p>
 */
export interface LocalGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the virtual interface group.</p>
   */
  LocalGatewayVirtualInterfaceGroupId?: string;

  /**
   * <p>The route type.</p>
   */
  Type?: LocalGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: LocalGatewayRouteState | string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route.</p>
   */
  OwnerId?: string;
}

export namespace LocalGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRoute): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: LocalGatewayRoute;
}

export namespace CreateLocalGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the local gateway route table VPC association.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a local gateway route table and a VPC.</p>
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  LocalGatewayRouteTableVpcAssociationId?: string;

  /**
   * <p>The ID of the local gateway route table.</p>
   */
  LocalGatewayRouteTableId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the local gateway route table for the association.</p>
   */
  LocalGatewayRouteTableArn?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the local gateway route table for the association.</p>
   */
  OwnerId?: string;

  /**
   * <p>The state of the association.</p>
   */
  State?: string;

  /**
   * <p>The tags assigned to the association.</p>
   */
  Tags?: Tag[];
}

export namespace LocalGatewayRouteTableVpcAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LocalGatewayRouteTableVpcAssociation): any => ({
    ...obj,
  });
}

export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * <p>Information about the association.</p>
   */
  LocalGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;
}

export namespace CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLocalGatewayRouteTableVpcAssociationResult): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the prefix list.</p>
   *         <p>Constraints: Up to 255 characters in length. The name cannot start with <code>com.amazonaws</code>.</p>
   */
  PrefixListName: string | undefined;

  /**
   * <p>One or more entries for the prefix list.</p>
   */
  Entries?: AddPrefixListEntry[];

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries: number | undefined;

  /**
   * <p>The tags to apply to the prefix list during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The IP address type.</p>
   *         <p>Valid Values: <code>IPv4</code> | <code>IPv6</code>
   *          </p>
   */
  AddressFamily: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *                 Idempotency</a>.</p>
   *         <p>Constraints: Up to 255 UTF-8 characters in length.</p>
   */
  ClientToken?: string;
}

export namespace CreateManagedPrefixListRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateManagedPrefixListRequest): any => ({
    ...obj,
  });
}

export type PrefixListState =
  | "create-complete"
  | "create-failed"
  | "create-in-progress"
  | "delete-complete"
  | "delete-failed"
  | "delete-in-progress"
  | "modify-complete"
  | "modify-failed"
  | "modify-in-progress"
  | "restore-complete"
  | "restore-failed"
  | "restore-in-progress";

/**
 * <p>Describes a managed prefix list.</p>
 */
export interface ManagedPrefixList {
  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The IP address version.</p>
   */
  AddressFamily?: string;

  /**
   * <p>The current state of the prefix list.</p>
   */
  State?: PrefixListState | string;

  /**
   * <p>The state message.</p>
   */
  StateMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the prefix list.</p>
   */
  PrefixListArn?: string;

  /**
   * <p>The name of the prefix list.</p>
   */
  PrefixListName?: string;

  /**
   * <p>The maximum number of entries for the prefix list.</p>
   */
  MaxEntries?: number;

  /**
   * <p>The version of the prefix list.</p>
   */
  Version?: number;

  /**
   * <p>The tags for the prefix list.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the owner of the prefix list.</p>
   */
  OwnerId?: string;
}

export namespace ManagedPrefixList {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ManagedPrefixList): any => ({
    ...obj,
  });
}

export interface CreateManagedPrefixListResult {
  /**
   * <p>Information about the prefix list.</p>
   */
  PrefixList?: ManagedPrefixList;
}

export namespace CreateManagedPrefixListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateManagedPrefixListResult): any => ({
    ...obj,
  });
}

export enum ConnectivityType {
  PRIVATE = "private",
  PUBLIC = "public",
}

export interface CreateNatGatewayRequest {
  /**
   * <p>[Public NAT gateways only] The allocation ID of an Elastic IP address to associate
   *           with the NAT gateway. You cannot specify an Elastic IP address with a private NAT gateway.
   *           If the Elastic IP address is associated with another resource, you must first disassociate it.</p>
   */
  AllocationId?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * 			request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   * 				idempotency</a>.</p>
   *          <p>Constraint: Maximum 64 ASCII characters.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The subnet in which to create the NAT gateway.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to assign to the NAT gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.
   *           The default is public connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;
}

export namespace CreateNatGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNatGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IP addresses and network interface associated with a NAT gateway.</p>
 */
export interface NatGatewayAddress {
  /**
   * <p>[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.</p>
   */
  AllocationId?: string;

  /**
   * <p>The ID of the network interface associated with the NAT gateway.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private IP address associated with the NAT gateway.</p>
   */
  PrivateIp?: string;

  /**
   * <p>[Public NAT gateway only] The Elastic IP address associated with the NAT gateway.</p>
   */
  PublicIp?: string;
}

export namespace NatGatewayAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NatGatewayAddress): any => ({
    ...obj,
  });
}

/**
 * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
 */
export interface ProvisionedBandwidth {
  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Provisioned?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  RequestTime?: Date;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Requested?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  Status?: string;
}

export namespace ProvisionedBandwidth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedBandwidth): any => ({
    ...obj,
  });
}

export enum NatGatewayState {
  AVAILABLE = "available",
  DELETED = "deleted",
  DELETING = "deleting",
  FAILED = "failed",
  PENDING = "pending",
}

/**
 * <p>Describes a NAT gateway.</p>
 */
export interface NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure.
   *         (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> |
   *          <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> |
   *          <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p>
   *          <ul>
   *             <li>
   *                <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p>
   *             </li>
   *             <li>
   *                <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p>
   *             </li>
   *             <li>
   *                <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p>
   *             </li>
   *             <li>
   *                <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p>
   *             </li>
   *             <li>
   *                <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p>
   *             </li>
   *          </ul>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: NatGatewayAddress[];

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through
   *           the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: ProvisionedBandwidth;

  /**
   * <p>The state of the NAT gateway.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code>: The NAT gateway is being created and is not ready to process
   *           traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: The NAT gateway could not be created. Check the
   *             <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>available</code>: The NAT gateway is able to process traffic. This status remains
   *           until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The NAT gateway is in the process of being terminated and may
   *           still be processing traffic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleted</code>: The NAT gateway has been terminated and is no longer processing
   *           traffic.</p>
   *             </li>
   *          </ul>
   */
  State?: NatGatewayState | string;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the NAT gateway supports public or private connectivity.</p>
   */
  ConnectivityType?: ConnectivityType | string;
}

export namespace NatGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NatGateway): any => ({
    ...obj,
  });
}

export interface CreateNatGatewayResult {
  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Information about the NAT gateway.</p>
   */
  NatGateway?: NatGateway;
}

export namespace CreateNatGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNatGatewayResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the network ACL.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateNetworkAclRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a network ACL and a subnet.</p>
 */
export interface NetworkAclAssociation {
  /**
   * <p>The ID of the association between a network ACL and a subnet.</p>
   */
  NetworkAclAssociationId?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;
}

export namespace NetworkAclAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAclAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the ICMP type and code.</p>
 */
export interface IcmpTypeCode {
  /**
   * <p>The ICMP code. A value of -1 means all codes for the specified ICMP type.</p>
   */
  Code?: number;

  /**
   * <p>The ICMP type. A value of -1 means all types.</p>
   */
  Type?: number;
}

export namespace IcmpTypeCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IcmpTypeCode): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a range of ports.</p>
 */
export interface PortRange {
  /**
   * <p>The first port in the range.</p>
   */
  From?: number;

  /**
   * <p>The last port in the range.</p>
   */
  To?: number;
}

export namespace PortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

export type RuleAction = "allow" | "deny";

/**
 * <p>Describes an entry in a network ACL.</p>
 */
export interface NetworkAclEntry {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Indicates whether the rule is an egress rule (applied to traffic leaving the subnet).</p>
   */
  Egress?: boolean;

  /**
   * <p>ICMP protocol: The ICMP type and code.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols.</p>
   */
  Protocol?: string;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction?: RuleAction | string;

  /**
   * <p>The rule number for the entry. ACL entries are processed in ascending order by rule number.</p>
   */
  RuleNumber?: number;
}

export namespace NetworkAclEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAclEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network ACL.</p>
 */
export interface NetworkAcl {
  /**
   * <p>Any associations between the network ACL and one or more subnets</p>
   */
  Associations?: NetworkAclAssociation[];

  /**
   * <p>One or more entries (rules) in the network ACL.</p>
   */
  Entries?: NetworkAclEntry[];

  /**
   * <p>Indicates whether this is the default network ACL for the VPC.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId?: string;

  /**
   * <p>Any tags assigned to the network ACL.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC for the network ACL.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the network ACL.</p>
   */
  OwnerId?: string;
}

export namespace NetworkAcl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkAcl): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclResult {
  /**
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: NetworkAcl;
}

export namespace CreateNetworkAclResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclResult): any => ({
    ...obj,
  });
}

export interface CreateNetworkAclEntryRequest {
  /**
   * <p>The IPv4 network range to allow or deny, in CIDR notation (for example
   * 		        <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).</p>
   */
  Egress: boolean | undefined;

  /**
   * <p>ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol
   * 		        1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.</p>
   */
  IcmpTypeCode?: IcmpTypeCode;

  /**
   * <p>The IPv6 network range to allow or deny, in CIDR notation (for example
   *                 <code>2001:db8:1234:1a00::/64</code>).</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The ID of the network ACL.</p>
   */
  NetworkAclId: string | undefined;

  /**
   * <p>TCP or UDP protocols: The range of ports the rule applies to.
   * 		        Required if specifying protocol 6 (TCP) or 17 (UDP).</p>
   */
  PortRange?: PortRange;

  /**
   * <p>The protocol number. A value of "-1" means all protocols. If you specify "-1" or a
   *   			protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is
   * 			allowed, regardless of any ports or ICMP types or codes that you specify. If you specify
   * 			protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and
   * 			codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6)
   * 			and specify an IPv6 CIDR block, you must specify an ICMP type and code.</p>
   */
  Protocol: string | undefined;

  /**
   * <p>Indicates whether to allow or deny the traffic that matches the rule.</p>
   */
  RuleAction: RuleAction | string | undefined;

  /**
   * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p>
   *          <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
   */
  RuleNumber: number | undefined;
}

export namespace CreateNetworkAclEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkAclEntryRequest): any => ({
    ...obj,
  });
}

export type Protocol = "tcp" | "udp";

export interface CreateNetworkInsightsPathRequest {
  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source: string | undefined;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination: string | undefined;

  /**
   * <p>The protocol.</p>
   */
  Protocol: Protocol | string | undefined;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags to add to the path.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInsightsPathRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a path.</p>
 */
export interface NetworkInsightsPath {
  /**
   * <p>The ID of the path.</p>
   */
  NetworkInsightsPathId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the path.</p>
   */
  NetworkInsightsPathArn?: string;

  /**
   * <p>The time stamp when the path was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Web Services resource that is the source of the path.</p>
   */
  Source?: string;

  /**
   * <p>The Amazon Web Services resource that is the destination of the path.</p>
   */
  Destination?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the source of the path.</p>
   */
  SourceIp?: string;

  /**
   * <p>The IP address of the Amazon Web Services resource that is the destination of the path.</p>
   */
  DestinationIp?: string;

  /**
   * <p>The protocol.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The destination port.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The tags associated with the path.</p>
   */
  Tags?: Tag[];
}

export namespace NetworkInsightsPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInsightsPath): any => ({
    ...obj,
  });
}

export interface CreateNetworkInsightsPathResult {
  /**
   * <p>Information about the path.</p>
   */
  NetworkInsightsPath?: NetworkInsightsPath;
}

export namespace CreateNetworkInsightsPathResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInsightsPathResult): any => ({
    ...obj,
  });
}

export type NetworkInterfaceCreationType = "branch" | "efa" | "trunk";

/**
 * <p>Contains the parameters for CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * <p>A description for the network interface.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *             and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *             Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of one or more security groups.</p>
   */
  Groups?: string[];

  /**
   * <p>The number of IPv6 addresses to assign to a network interface. Amazon EC2
   *             automatically selects the IPv6 addresses from the subnet range. You can't use this
   *             option if specifying specific IPv6 addresses. If your subnet has the <code>AssignIpv6AddressOnCreation</code> attribute set
   *             to <code>true</code>, you can specify <code>0</code> to override this setting.</p>
   */
  Ipv6AddressCount?: number;

  /**
   * <p>One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet.
   *             You can't use this option if you're specifying a number of IPv6 addresses.</p>
   */
  Ipv6Addresses?: InstanceIpv6Address[];

  /**
   * <p>The primary private IPv4 address of the network interface. If you don't specify an
   *             IPv4 address, Amazon EC2 selects one for you from the subnet's IPv4 CIDR range. If you
   *             specify an IP address, you cannot indicate any IP addresses specified in
   *             <code>privateIpAddresses</code> as primary (only one IP address can be designated as
   *             primary).</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>One or more private IPv4 addresses.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * <p>The number of secondary private IPv4 addresses to assign to a network interface. When
   *             you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses
   *             within the subnet's IPv4 CIDR range. You can't specify this option and specify more than
   *             one private IP address using <code>privateIpAddresses</code>.</p>
   *         <p>The number of IP addresses you can assign to a network interface varies by instance
   *             type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per ENI Per
   *                 Instance Type</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  SecondaryPrivateIpAddressCount?: number;

  /**
   * <p>One or more IPv4 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv4PrefixCount</code> option.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv4 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv4 Prefixes</code> option.</p>
   */
  Ipv4PrefixCount?: number;

  /**
   * <p>One or more IPv6 prefixes assigned to the network interface. You cannot use this option if you use the <code>Ipv6PrefixCount</code> option.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  /**
   * <p>The number of IPv6 prefixes that Amazon Web Services automatically assigns to the network interface. You cannot use this option if you use the <code>Ipv6Prefixes</code> option.</p>
   */
  Ipv6PrefixCount?: number;

  /**
   * <p>Indicates the type of network interface. To create an Elastic Fabric Adapter (EFA), specify
   * 			<code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html">
   * 			    Elastic Fabric Adapter</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. To create a trunk network interface, specify
   * 		    <code>efa</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/eni-trunking.html">
   * 		        Network interface trunking</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  InterfaceType?: NetworkInterfaceCreationType | string;

  /**
   * <p>The ID of the subnet to associate with the network interface.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The tags to apply to the new network interface.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes association information for an Elastic IP address (IPv4 only), or a Carrier
 *             IP address (for a network interface which resides in a subnet in a Wavelength
 *             Zone).</p>
 */
export interface NetworkInterfaceAssociation {
  /**
   * <p>The allocation ID.</p>
   */
  AllocationId?: string;

  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the Elastic IP address owner.</p>
   */
  IpOwnerId?: string;

  /**
   * <p>The public DNS name.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The address of the Elastic IP address bound to the network
   *             interface.</p>
   */
  PublicIp?: string;

  /**
   * <p>The customer-owned IP address associated with the network interface.</p>
   */
  CustomerOwnedIp?: string;

  /**
   * <p>The carrier IP address associated with the network interface.</p>
   *         <p>This option is only available when the network interface is in a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierIp?: string;
}

export namespace NetworkInterfaceAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a network interface attachment.</p>
 */
export interface NetworkInterfaceAttachment {
  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: Date;

  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The index of the network card.</p>
   */
  NetworkCardIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The attachment state.</p>
   */
  Status?: AttachmentStatus | string;
}

export namespace NetworkInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface GroupIdentifier {
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

export namespace GroupIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupIdentifier): any => ({
    ...obj,
  });
}

export type NetworkInterfaceType = "efa" | "interface" | "natGateway" | "trunk";

/**
 * <p>Describes an IPv6 address associated with a network interface.</p>
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * <p>The IPv6 address.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterfaceIpv6Address {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfaceIpv6Address): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the IPv6 prefix.</p>
 */
export interface Ipv6PrefixSpecification {
  /**
   * <p>The IPv6 prefix.</p>
   */
  Ipv6Prefix?: string;
}

export namespace Ipv6PrefixSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ipv6PrefixSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the private IPv4 address of a network interface.</p>
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>Indicates whether this IPv4 address is the primary private IPv4 address of the network interface.</p>
   */
  Primary?: boolean;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IPv4 address.</p>
   */
  PrivateIpAddress?: string;
}

export namespace NetworkInterfacePrivateIpAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePrivateIpAddress): any => ({
    ...obj,
  });
}

export type NetworkInterfaceStatus = "associated" | "attaching" | "available" | "detaching" | "in-use";

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * <p>The association information for an Elastic IP address (IPv4) associated with the network interface.</p>
   */
  Association?: NetworkInterfaceAssociation;

  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: NetworkInterfaceAttachment;

  /**
   * <p>The Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>Any security groups for the network interface.</p>
   */
  Groups?: GroupIdentifier[];

  /**
   * <p>The type of network interface.</p>
   */
  InterfaceType?: NetworkInterfaceType | string;

  /**
   * <p>The IPv6 addresses associated with the network interface.</p>
   */
  Ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * <p>The MAC address.</p>
   */
  MacAddress?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The Amazon Web Services account ID of the owner of the network interface.</p>
   */
  OwnerId?: string;

  /**
   * <p>The private DNS name.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The private IPv4 addresses associated with the network interface.</p>
   */
  PrivateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * <p>The IPv4 prefixes that are assigned to the network interface.</p>
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];

  /**
   * <p>The IPv6 prefixes that are assigned to the network interface.</p>
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];

  /**
   * <p>The alias or Amazon Web Services account ID of the principal or service that created the network interface.</p>
   */
  RequesterId?: string;

  /**
   * <p>Indicates whether the network interface is being managed by Amazon Web Services.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>Indicates whether source/destination checking is enabled.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>The status of the network interface.</p>
   */
  Status?: NetworkInterfaceStatus | string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>Any tags assigned to the network interface.</p>
   */
  TagSet?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Indicates whether a network interface with an IPv6 address is unreachable from the
   *             public internet. If the value is <code>true</code>, inbound traffic from the internet
   *             is dropped and you cannot assign an elastic IP address to the network interface. The
   *             network interface is reachable from peered VPCs and resources connected through a
   *             transit gateway, including on-premises networks.</p>
   */
  DenyAllIgwTraffic?: boolean;

  /**
   * <p>Indicates whether this is an IPv6 only network interface.</p>
   */
  Ipv6Native?: boolean;

  /**
   * <p>The IPv6 globally unique address associated with the network interface.</p>
   */
  Ipv6Address?: string;
}

export namespace NetworkInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceResult {
  /**
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: NetworkInterface;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  ClientToken?: string;
}

export namespace CreateNetworkInterfaceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfaceResult): any => ({
    ...obj,
  });
}

export type InterfacePermissionType = "EIP-ASSOCIATE" | "INSTANCE-ATTACH";

/**
 * <p>Contains the parameters for CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service. Currently not supported.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission to grant.</p>
   */
  Permission: InterfacePermissionType | string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   * 			and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   * 			Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateNetworkInterfacePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionRequest): any => ({
    ...obj,
  });
}

export type NetworkInterfacePermissionStateCode = "granted" | "pending" | "revoked" | "revoking";

/**
 * <p>Describes the state of a network interface permission.</p>
 */
export interface NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   */
  State?: NetworkInterfacePermissionStateCode | string;

  /**
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export namespace NetworkInterfacePermissionState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePermissionState): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a permission for a network interface.</p>
 */
export interface NetworkInterfacePermission {
  /**
   * <p>The ID of the network interface permission.</p>
   */
  NetworkInterfacePermissionId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  AwsAccountId?: string;

  /**
   * <p>The Amazon Web Service.</p>
   */
  AwsService?: string;

  /**
   * <p>The type of permission.</p>
   */
  Permission?: InterfacePermissionType | string;

  /**
   * <p>Information about the state of the permission.</p>
   */
  PermissionState?: NetworkInterfacePermissionState;
}

export namespace NetworkInterfacePermission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkInterfacePermission): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateNetworkInterfacePermission.</p>
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * <p>Information about the permission for the network interface.</p>
   */
  InterfacePermission?: NetworkInterfacePermission;
}

export namespace CreateNetworkInterfacePermissionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateNetworkInterfacePermissionResult): any => ({
    ...obj,
  });
}

export type PlacementStrategy = "cluster" | "partition" | "spread";

export interface CreatePlacementGroupRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>A name for the placement group. Must be unique within the scope of your account for
   *             the Region.</p>
   *         <p>Constraints: Up to 255 ASCII characters</p>
   */
  GroupName?: string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only when <b>Strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The tags to apply to the new placement group.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreatePlacementGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlacementGroupRequest): any => ({
    ...obj,
  });
}

export type PlacementGroupState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a placement group.</p>
 */
export interface PlacementGroup {
  /**
   * <p>The name of the placement group.</p>
   */
  GroupName?: string;

  /**
   * <p>The state of the placement group.</p>
   */
  State?: PlacementGroupState | string;

  /**
   * <p>The placement strategy.</p>
   */
  Strategy?: PlacementStrategy | string;

  /**
   * <p>The number of partitions. Valid only if <b>strategy</b> is
   *             set to <code>partition</code>.</p>
   */
  PartitionCount?: number;

  /**
   * <p>The ID of the placement group.</p>
   */
  GroupId?: string;

  /**
   * <p>Any tags applied to the placement group.</p>
   */
  Tags?: Tag[];
}

export namespace PlacementGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlacementGroup): any => ({
    ...obj,
  });
}

export interface CreatePlacementGroupResult {
  /**
   * <p>Describes a placement group.</p>
   */
  PlacementGroup?: PlacementGroup;
}

export namespace CreatePlacementGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePlacementGroupResult): any => ({
    ...obj,
  });
}

export interface CreateReplaceRootVolumeTaskRequest {
  /**
   * <p>The ID of the instance for which to replace the root volume.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The ID of the snapshot from which to restore the replacement root volume. If you want to
   *       restore the volume to the initial launch state, omit this parameter.</p>
   */
  SnapshotId?: string;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.
   *       If you do not specify a client token, a randomly generated token is used for the request
   *       to ensure idempotency. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the root volume replacement task.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateReplaceRootVolumeTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplaceRootVolumeTaskRequest): any => ({
    ...obj,
  });
}

export enum ReplaceRootVolumeTaskState {
  failed = "failed",
  failed_detached = "failed-detached",
  failing = "failing",
  in_progress = "in-progress",
  pending = "pending",
  succeeded = "succeeded",
}

/**
 * <p>Information about a root volume replacement task.</p>
 */
export interface ReplaceRootVolumeTask {
  /**
   * <p>The ID of the root volume replacement task.</p>
   */
  ReplaceRootVolumeTaskId?: string;

  /**
   * <p>The ID of the instance for which the root volume replacement task was created.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the task. The task can be in one of the following states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>pending</code> - the replacement volume is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>in-progress</code> - the original volume is being detached and the
   *           replacement volume is being attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>succeeded</code> - the replacement volume has been successfully attached
   *           to the instance and the instance is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing</code> - the replacement task is in the process of failing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - the replacement task has failed but the original root
   *           volume is still attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failing-detached</code> - the replacement task is in the process of failing.
   *           The instance might have no root volume attached.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed-detached</code> - the replacement task has failed and the instance
   *           has no root volume attached.</p>
   *             </li>
   *          </ul>
   */
  TaskState?: ReplaceRootVolumeTaskState | string;

  /**
   * <p>The time the task was started.</p>
   */
  StartTime?: string;

  /**
   * <p>The time the task completed.</p>
   */
  CompleteTime?: string;

  /**
   * <p>The tags assigned to the task.</p>
   */
  Tags?: Tag[];
}

export namespace ReplaceRootVolumeTask {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplaceRootVolumeTask): any => ({
    ...obj,
  });
}

export interface CreateReplaceRootVolumeTaskResult {
  /**
   * <p>Information about the root volume replacement task.</p>
   */
  ReplaceRootVolumeTask?: ReplaceRootVolumeTask;
}

export namespace CreateReplaceRootVolumeTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReplaceRootVolumeTaskResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface PriceScheduleSpecification {
  /**
   * <p>The currency for transacting the Reserved Instance resale.
   * 				At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: CurrencyCodeValues | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export namespace PriceScheduleSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PriceScheduleSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your
   * 				listings. This helps avoid duplicate listings. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string | undefined;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules: PriceScheduleSpecification[] | undefined;

  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string | undefined;
}

export namespace CreateReservedInstancesListingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingResult {
  /**
   * <p>Information about the Standard Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: ReservedInstancesListing[];
}

export namespace CreateReservedInstancesListingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateReservedInstancesListingResult): any => ({
    ...obj,
  });
}

export interface CreateRestoreImageTaskRequest {
  /**
   * <p>The name of the Amazon S3 bucket that contains the stored AMI object.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the stored AMI object in the bucket.</p>
   */
  ObjectKey: string | undefined;

  /**
   * <p>The name for the restored AMI. The name must be unique for AMIs in the Region for this
   *       account. If you do not provide a name, the new AMI gets the same name as the original
   *       AMI.</p>
   */
  Name?: string;

  /**
   * <p>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the
   *       snapshots, or both.</p>
   *          <ul>
   *             <li>
   *                <p>To tag the AMI, the value for <code>ResourceType</code> must be <code>image</code>.</p>
   *             </li>
   *             <li>
   *                <p>To
   *           tag the snapshots, the value for <code>ResourceType</code> must be <code>snapshot</code>. The
   *           same tag is applied to all of the snapshots that are created.</p>
   *             </li>
   *          </ul>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateRestoreImageTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRestoreImageTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateRestoreImageTaskResult {
  /**
   * <p>The AMI ID.</p>
   */
  ImageId?: string;
}

export namespace CreateRestoreImageTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRestoreImageTaskResult): any => ({
    ...obj,
  });
}

export interface CreateRouteRequest {
  /**
   * <p>The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The ID of a prefix list used for the destination match.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>[IPv6 traffic only] The ID of an egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of an internet gateway or virtual private gateway attached to your
   * 			VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.</p>
   */
  InstanceId?: string;

  /**
   * <p>[IPv4 traffic only] The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   *         <p>You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of a network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the route table for the route.</p>
   */
  RouteTableId: string | undefined;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export namespace CreateRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
  });
}

export interface CreateRouteResult {
  /**
   * <p>Returns <code>true</code> if the request succeeds; otherwise, it returns an error.</p>
   */
  Return?: boolean;
}

export namespace CreateRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResult): any => ({
    ...obj,
  });
}

export interface CreateRouteTableRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The tags to assign to the route table.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an association between a route table and a subnet or gateway.</p>
 */
export interface RouteTableAssociation {
  /**
   * <p>Indicates whether this is the main route table.</p>
   */
  Main?: boolean;

  /**
   * <p>The ID of the association.</p>
   */
  RouteTableAssociationId?: string;

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The ID of the subnet. A subnet ID is not returned for an implicit association.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the internet gateway or virtual private gateway.</p>
   */
  GatewayId?: string;

  /**
   * <p>The state of the association.</p>
   */
  AssociationState?: RouteTableAssociationState;
}

export namespace RouteTableAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTableAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a virtual private gateway propagating route.</p>
 */
export interface PropagatingVgw {
  /**
   * <p>The ID of the virtual private gateway.</p>
   */
  GatewayId?: string;
}

export namespace PropagatingVgw {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropagatingVgw): any => ({
    ...obj,
  });
}

export type RouteOrigin = "CreateRoute" | "CreateRouteTable" | "EnableVgwRoutePropagation";

export type RouteState = "active" | "blackhole";

/**
 * <p>Describes a route in a route table.</p>
 */
export interface Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The prefix of the Amazon Web Service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>The ID of Amazon Web Services account that owns the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the local gateway.</p>
   */
  LocalGatewayId?: string;

  /**
   * <p>The ID of the carrier gateway.</p>
   */
  CarrierGatewayId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateRoute</code> - The route was manually added to the route table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p>
   *             </li>
   *          </ul>
   */
  Origin?: RouteOrigin | string;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the
   * 				route's target isn't available (for example, the specified gateway isn't attached to the
   * 				VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: RouteState | string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the core network.</p>
   */
  CoreNetworkArn?: string;
}

export namespace Route {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Route): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a route table.</p>
 */
export interface RouteTable {
  /**
   * <p>The associations between the route table and one or more subnets or a gateway.</p>
   */
  Associations?: RouteTableAssociation[];

  /**
   * <p>Any virtual private gateway (VGW) propagating routes.</p>
   */
  PropagatingVgws?: PropagatingVgw[];

  /**
   * <p>The ID of the route table.</p>
   */
  RouteTableId?: string;

  /**
   * <p>The routes in the route table.</p>
   */
  Routes?: Route[];

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the route table.</p>
   */
  OwnerId?: string;
}

export namespace RouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteTable): any => ({
    ...obj,
  });
}

export interface CreateRouteTableResult {
  /**
   * <p>Information about the route table.</p>
   */
  RouteTable?: RouteTable;
}

export namespace CreateRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteTableResult): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupRequest {
  /**
   * <p>A description for the security group. This is informational only.</p>
   * 		       <p>Constraints: Up to 255 characters in length</p>
   * 		       <p>Constraints for EC2-Classic: ASCII characters</p>
   * 		       <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the security group.</p>
   *          <p>Constraints: Up to 255 characters in length. Cannot start with
   *             <code>sg-</code>.</p>
   *          <p>Constraints for EC2-Classic: ASCII characters</p>
   *          <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&;{}!$*</p>
   */
  GroupName: string | undefined;

  /**
   * <p>[EC2-VPC] The ID of the VPC. Required for EC2-VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags to assign to the security group.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSecurityGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityGroupResult {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The tags assigned to the security group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSecurityGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityGroupResult): any => ({
    ...obj,
  });
}

export interface CreateSnapshotRequest {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create a local
   *   	snapshot.</p>
   *   	      <ul>
   *             <li>
   *   			          <p>To create a snapshot of a volume in a Region, omit this parameter. The snapshot
   *   				is created in the same Region as the volume.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create a snapshot of a volume on an Outpost and store the snapshot in the
   *   				Region, omit this parameter. The snapshot is created in the Region for the
   *   				Outpost.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create a snapshot of a volume on an Outpost and store the snapshot on an
   *   			Outpost, specify the ARN of the destination Outpost. The snapshot must be created on
   *   			the same Outpost as the volume.</p>
   *   		        </li>
   *          </ul>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-snapshot">Create local snapshots from volumes on an Outpost</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the Amazon EBS volume.</p>
   */
  VolumeId: string | undefined;

  /**
   * <p>The tags to apply to the snapshot during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

export type SnapshotState = "completed" | "error" | "pending" | "recoverable" | "recovering";

export enum StorageTier {
  archive = "archive",
  standard = "standard",
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier
   *       that corresponds to the data encryption key that was used to encrypt the original volume or
   *       snapshot copy. Because data encryption keys are inherited by volumes created from snapshots,
   *       and vice versa, if snapshots share the same data encryption key identifier, then they belong
   *       to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  DataEncryptionKeyId?: string;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the parent volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the EBS snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is
   *       created.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The snapshot state.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails
   *       (for example, if the proper Key Management Service (KMS) permissions are not obtained) this field displays error
   *       state details to help you diagnose why the error occurred. This parameter is only returned by
   *       <a>DescribeSnapshots</a>.</p>
   */
  StateMessage?: string;

  /**
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any
   *       purpose.</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The Amazon Web Services owner alias, from an Amazon-maintained list (<code>amazon</code>). This is not
   *       the user-configured Amazon Web Services account alias set using the IAM console.</p>
   */
  OwnerAlias?: string;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The storage tier in which the snapshot is stored. <code>standard</code> indicates
   *       that the snapshot is stored in the standard snapshot storage tier and that it is ready
   *       for use. <code>archive</code> indicates that the snapshot is currently archived and that
   *       it must be restored before it can be used.</p>
   */
  StorageTier?: StorageTier | string;

  /**
   * <p>Only for archived snapshots that are temporarily restored. Indicates the date and
   *       time when a temporarily restored snapshot will be automatically re-archived.</p>
   */
  RestoreExpiryTime?: Date;
}

export namespace Snapshot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export type CopyTagsFromSource = "volume";

/**
 * <p>The instance details to specify which volumes should be snapshotted.</p>
 */
export interface InstanceSpecification {
  /**
   * <p>The instance to specify which volumes should be snapshotted.</p>
   */
  InstanceId?: string;

  /**
   * <p>Excludes the root volume from being snapshotted.</p>
   */
  ExcludeBootVolume?: boolean;
}

export namespace InstanceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceSpecification): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsRequest {
  /**
   * <p> A description propagated to every snapshot specified by the instance.</p>
   */
  Description?: string;

  /**
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   */
  InstanceSpecification: InstanceSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost on which to create the local
   *   		snapshots.</p>
   *   	      <ul>
   *             <li>
   *   			          <p>To create snapshots from an instance in a Region, omit this parameter. The
   *   				snapshots are created in the same Region as the instance.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				in the Region, omit this parameter. The snapshots are created in the Region
   *   				for the Outpost.</p>
   *   		        </li>
   *             <li>
   *   			          <p>To create snapshots from an instance on an Outpost and store the snapshots
   *   				on an Outpost, specify the ARN of the destination Outpost. The snapshots must
   *   				be created on the same Outpost as the instance.</p>
   *   		        </li>
   *          </ul>
   *   	      <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#create-multivol-snapshot">
   *   		Create multi-volume local snapshots from instances on an Outpost</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;

  /**
   * <p>Tags to apply to every snapshot specified by the instance.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   */
  CopyTagsFromSource?: CopyTagsFromSource | string;
}

export namespace CreateSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a snapshot.</p>
 */
export interface SnapshotInfo {
  /**
   * <p>Description specified by the CreateSnapshotRequest that has been applied to all
   *     snapshots.</p>
   */
  Description?: string;

  /**
   * <p>Tags associated with this snapshot.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Source volume from which this snapshot was created.</p>
   */
  VolumeId?: string;

  /**
   * <p>Current state of the snapshot.</p>
   */
  State?: SnapshotState | string;

  /**
   * <p>Size of the volume from which this snapshot was created.</p>
   */
  VolumeSize?: number;

  /**
   * <p>Time this snapshot was started. This is the same for all snapshots initiated by the
   *     same request.</p>
   */
  StartTime?: Date;

  /**
   * <p>Progress this snapshot has made towards completing.</p>
   */
  Progress?: string;

  /**
   * <p>Account id used when creating this snapshot.</p>
   */
  OwnerId?: string;

  /**
   * <p>Snapshot id that can be used to describe this snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ARN of the Outpost on which the snapshot is stored. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html">Amazon EBS local snapshots on Outposts</a> in the
   *   		<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  OutpostArn?: string;
}

export namespace SnapshotInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SnapshotInfo): any => ({
    ...obj,
  });
}

export interface CreateSnapshotsResult {
  /**
   * <p>List of snapshots.</p>
   */
  Snapshots?: SnapshotInfo[];
}

export namespace CreateSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSnapshotsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the parameters for CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * <p>The name of the Amazon S3 bucket in which to store the Spot Instance data feed. For
   *             more information about bucket names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Rules for bucket
   *                 naming</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually
   *             making the request, and provides an error response. If you have the required
   *             permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is
   *                 <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The prefix for the data feed file names.</p>
   */
  Prefix?: string;
}

export namespace CreateSpotDatafeedSubscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Spot Instance state change.</p>
 */
export interface SpotInstanceStateFault {
  /**
   * <p>The reason code for the Spot Instance state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the Spot Instance state change.</p>
   */
  Message?: string;
}

export namespace SpotInstanceStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotInstanceStateFault): any => ({
    ...obj,
  });
}

export type DatafeedSubscriptionState = "Active" | "Inactive";

/**
 * <p>Describes the data feed for a Spot Instance.</p>
 */
export interface SpotDatafeedSubscription {
  /**
   * <p>The name of the Amazon S3 bucket where the Spot Instance data feed is located.</p>
   */
  Bucket?: string;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: SpotInstanceStateFault;

  /**
   * <p>The Amazon Web Services account ID of the account.</p>
   */
  OwnerId?: string;

  /**
   * <p>The prefix for the data feed files.</p>
   */
  Prefix?: string;

  /**
   * <p>The state of the Spot Instance data feed subscription.</p>
   */
  State?: DatafeedSubscriptionState | string;
}

export namespace SpotDatafeedSubscription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SpotDatafeedSubscription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: SpotDatafeedSubscription;
}

export namespace CreateSpotDatafeedSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSpotDatafeedSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. For more
 *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html">Categorizing your storage using
 *         tags</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 */
export interface S3ObjectTag {
  /**
   * <p>The key of the tag.</p>
   *          <p>Constraints: Tag keys are case-sensitive and can be up to 128 Unicode characters in
   *       length. May not begin with <code>aws</code>:.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   *          <p>Constraints: Tag values are case-sensitive and can be up to 256 Unicode characters in
   *       length.</p>
   */
  Value?: string;
}

export namespace S3ObjectTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ObjectTag): any => ({
    ...obj,
  });
}

export interface CreateStoreImageTaskRequest {
  /**
   * <p>The ID of the AMI.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in
   *       the Region in which the request is being made. The AMI object appears in the bucket only after
   *       the upload task has completed. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. </p>
   */
  S3ObjectTags?: S3ObjectTag[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *       and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *       Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateStoreImageTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStoreImageTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateStoreImageTaskResult {
  /**
   * <p>The name of the stored AMI object in the S3 bucket.</p>
   */
  ObjectKey?: string;
}

export namespace CreateStoreImageTaskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStoreImageTaskResult): any => ({
    ...obj,
  });
}

export interface CreateSubnetRequest {
  /**
   * <p>The tags to assign to the subnet.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The Availability Zone or Local Zone for the subnet.</p>
   *          <p>Default: Amazon Web Services selects one for you. If you create more than one subnet in your VPC, we
   *           do not necessarily select a different zone for each subnet.</p>
   *          <p>To create a subnet in a Local Zone, set this value to the Local Zone ID, for example
   *           <code>us-west-2-lax-1a</code>. For information about the Regions that support Local Zones,
   *            see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions">Available Regions</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>To create a subnet in an Outpost, set this value to the Availability Zone for the
   *            Outpost and specify the Outpost ARN.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The AZ ID or the Local Zone ID of the subnet.</p>
   */
  AvailabilityZoneId?: string;

  /**
   * <p>The IPv4 network range for the subnet, in CIDR notation. For example, <code>10.0.0.0/24</code>.
   *            We modify the specified CIDR block to its canonical form; for example, if you specify
   *            <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   *          <p>This parameter is not supported for an IPv6 only subnet.</p>
   */
  CidrBlock?: string;

  /**
   * <p>The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a
   *             /64 prefix length.</p>
   *         <p>This parameter is required for an IPv6 only subnet.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost. If you specify an Outpost ARN, you must also
   *         specify the Availability Zone of the Outpost subnet.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to create an IPv6 only subnet.</p>
   */
  Ipv6Native?: boolean;
}

export namespace CreateSubnetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetRequest): any => ({
    ...obj,
  });
}

export interface CreateSubnetResult {
  /**
   * <p>Information about the subnet.</p>
   */
  Subnet?: Subnet;
}

export namespace CreateSubnetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetResult): any => ({
    ...obj,
  });
}

export enum SubnetCidrReservationType {
  explicit = "explicit",
  prefix = "prefix",
}

export interface CreateSubnetCidrReservationRequest {
  /**
   * <p>The tags to assign to the subnet CIDR reservation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId: string | undefined;

  /**
   * <p>The IPv4 or IPV6 CIDR range to reserve.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>The type of reservation.</p>
   *         <p>The following are valid values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>prefix</code>: The Amazon EC2
   *                     Prefix
   *                     Delegation feature assigns the IP addresses to network interfaces that are
   *                     associated with an instance. For information about Prefix
   *                     Delegation,
   *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-delegation.html">Prefix Delegation
   *                         for Amazon EC2 network interfaces</a> in the
   *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>explicit</code>: You manually assign the IP addresses to resources that
   *                     reside in your subnet. </p>
   *             </li>
   *          </ul>
   */
  ReservationType: SubnetCidrReservationType | string | undefined;

  /**
   * <p>The
   *             description
   *             to assign to the subnet CIDR reservation.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateSubnetCidrReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetCidrReservationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet CIDR reservation.</p>
 */
export interface SubnetCidrReservation {
  /**
   * <p>The ID of the subnet CIDR reservation.</p>
   */
  SubnetCidrReservationId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The CIDR that has been reserved.</p>
   */
  Cidr?: string;

  /**
   * <p>The type of reservation. </p>
   */
  ReservationType?: SubnetCidrReservationType | string;

  /**
   * <p>The ID of the account that owns the subnet CIDR reservation. </p>
   */
  OwnerId?: string;

  /**
   * <p>The
   *             description
   *             assigned to the subnet CIDR
   *             reservation.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the subnet CIDR reservation.</p>
   */
  Tags?: Tag[];
}

export namespace SubnetCidrReservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetCidrReservation): any => ({
    ...obj,
  });
}

export interface CreateSubnetCidrReservationResult {
  /**
   * <p>Information about the created subnet CIDR reservation.</p>
   */
  SubnetCidrReservation?: SubnetCidrReservation;
}

export namespace CreateSubnetCidrReservationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSubnetCidrReservationResult): any => ({
    ...obj,
  });
}

export interface CreateTagsRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The IDs of the resources, separated by spaces.</p>
   *    	     <p>Constraints: Up to 1000 resource IDs. We recommend breaking up this request into smaller batches.</p>
   */
  Resources: string[] | undefined;

  /**
   * <p>The tags. The <code>value</code> parameter is required, but if you don't want the tag to have a value,
   *         specify the parameter with no value, and we set the value to an empty string.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRequest {
  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror filter.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Traffic Mirror port range.</p>
 */
export interface TrafficMirrorPortRange {
  /**
   * <p>The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export namespace TrafficMirrorPortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorPortRange): any => ({
    ...obj,
  });
}

export type TrafficMirrorRuleAction = "accept" | "reject";

export type TrafficDirection = "egress" | "ingress";

/**
 * <p>Describes the Traffic Mirror rule.</p>
 */
export interface TrafficMirrorFilterRule {
  /**
   * <p>The ID of the Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRuleId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter that the rule is associated with.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The traffic direction assigned to the Traffic Mirror rule.</p>
   */
  TrafficDirection?: TrafficDirection | string;

  /**
   * <p>The rule number of the Traffic Mirror rule.</p>
   */
  RuleNumber?: number;

  /**
   * <p>The action assigned to the Traffic Mirror rule.</p>
   */
  RuleAction?: TrafficMirrorRuleAction | string;

  /**
   * <p>The protocol assigned to the Traffic Mirror rule.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination port range assigned to the Traffic Mirror rule.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRange;

  /**
   * <p>The source port range assigned to the Traffic Mirror rule.</p>
   */
  SourcePortRange?: TrafficMirrorPortRange;

  /**
   * <p>The destination CIDR block assigned to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The source CIDR block assigned to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock?: string;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;
}

export namespace TrafficMirrorFilterRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorFilterRule): any => ({
    ...obj,
  });
}

export type TrafficMirrorNetworkService = "amazon-dns";

/**
 * <p>Describes the Traffic Mirror filter.</p>
 */
export interface TrafficMirrorFilter {
  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>Information about the ingress rules that are associated with the Traffic Mirror filter.</p>
   */
  IngressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>Information about the egress rules that are associated with the Traffic Mirror filter.</p>
   */
  EgressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * <p>The network service traffic that is associated with the Traffic Mirror filter.</p>
   */
  NetworkServices?: (TrafficMirrorNetworkService | string)[];

  /**
   * <p>The description of the Traffic Mirror filter.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror filter.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorFilter): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterResult {
  /**
   * <p>Information about the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilter?: TrafficMirrorFilter;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Traffic Mirror filter rule port range.</p>
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * <p>The first port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  FromPort?: number;

  /**
   * <p>The last port in the Traffic Mirror port range. This applies to the TCP and UDP protocols.</p>
   */
  ToPort?: number;
}

export namespace TrafficMirrorPortRangeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorPortRangeRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * <p>The ID of the filter that this rule is associated with.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The type of traffic.</p>
   */
  TrafficDirection: TrafficDirection | string | undefined;

  /**
   * <p>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given
   *          direction. The rules are processed in ascending order by rule number.</p>
   */
  RuleNumber: number | undefined;

  /**
   * <p>The action to take on the filtered traffic.</p>
   */
  RuleAction: TrafficMirrorRuleAction | string | undefined;

  /**
   * <p>The destination port range.</p>
   */
  DestinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The source port range.</p>
   */
  SourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p>
   *          <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the  Internet Assigned Numbers Authority (IANA) website.</p>
   */
  Protocol?: number;

  /**
   * <p>The destination CIDR block to assign to the Traffic Mirror rule.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The source CIDR block to assign to the Traffic Mirror rule.</p>
   */
  SourceCidrBlock: string | undefined;

  /**
   * <p>The description of the Traffic Mirror rule.</p>
   */
  Description?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * <p>The Traffic Mirror rule.</p>
   */
  TrafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorFilterRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorFilterRuleResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionRequest {
  /**
   * <p>The ID of the source network interface.</p>
   */
  NetworkInterfaceId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId: string | undefined;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId: string | undefined;

  /**
   * <p>The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do
   *          not specify this parameter when you want to mirror the entire packet. To mirror a subset of
   *          the packet, set this to the length (in bytes) that you want to mirror. For example, if you
   *          set this value to 100, then the first 100 bytes that meet the filter criteria are copied to
   *          the target.</p>
   *          <p>If you do not want to mirror the entire packet, use the <code>PacketLength</code> parameter to specify the number of bytes in each packet to mirror.</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber: number | undefined;

  /**
   * <p>The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN
   *          protocol, see <a href="https://tools.ietf.org/html/rfc7348">RFC 7348</a>. If you do
   *          not specify a <code>VirtualNetworkId</code>, an account-wide unique id is chosen at
   *          random.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to a Traffic Mirror session.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a Traffic Mirror session.</p>
 */
export interface TrafficMirrorSession {
  /**
   * <p>The ID for the Traffic Mirror session.</p>
   */
  TrafficMirrorSessionId?: string;

  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The ID of the Traffic Mirror filter.</p>
   */
  TrafficMirrorFilterId?: string;

  /**
   * <p>The ID of the Traffic Mirror session's network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror session.</p>
   */
  OwnerId?: string;

  /**
   * <p>The number of bytes in each packet to mirror. These are the bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet</p>
   */
  PacketLength?: number;

  /**
   * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p>
   *          <p>Valid values are 1-32766.</p>
   */
  SessionNumber?: number;

  /**
   * <p>The virtual network ID associated with the Traffic Mirror session.</p>
   */
  VirtualNetworkId?: number;

  /**
   * <p>The description of the Traffic Mirror session.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror session.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorSession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorSession): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorSessionResult {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: TrafficMirrorSession;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorSessionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorSessionResult): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetRequest {
  /**
   * <p>The network interface ID that is associated with the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The description of the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The tags to assign to the Traffic Mirror target.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorTargetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetRequest): any => ({
    ...obj,
  });
}

export type TrafficMirrorTargetType = "network-interface" | "network-load-balancer";

/**
 * <p>Describes a Traffic Mirror target.</p>
 */
export interface TrafficMirrorTarget {
  /**
   * <p>The ID of the Traffic Mirror target.</p>
   */
  TrafficMirrorTargetId?: string;

  /**
   * <p>The network interface ID that is attached to the target.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer.</p>
   */
  NetworkLoadBalancerArn?: string;

  /**
   * <p>The type of Traffic Mirror target.</p>
   */
  Type?: TrafficMirrorTargetType | string;

  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the account that owns the Traffic Mirror target.</p>
   */
  OwnerId?: string;

  /**
   * <p>The tags assigned to the Traffic Mirror target.</p>
   */
  Tags?: Tag[];
}

export namespace TrafficMirrorTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrafficMirrorTarget): any => ({
    ...obj,
  });
}

export interface CreateTrafficMirrorTargetResult {
  /**
   * <p>Information about the Traffic Mirror target.</p>
   */
  TrafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateTrafficMirrorTargetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrafficMirrorTargetResult): any => ({
    ...obj,
  });
}

export type AutoAcceptSharedAttachmentsValue = "disable" | "enable";

export type DefaultRouteTableAssociationValue = "disable" | "enable";

export type DefaultRouteTablePropagationValue = "disable" | "enable";

export type MulticastSupportValue = "disable" | "enable";

export type VpnEcmpSupportValue = "disable" | "enable";

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayRequestOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs. The default is <code>64512</code>.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>Enable or disable automatic acceptance of attachment requests. Disabled by default.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Enable or disable automatic association with the default association route table. Enabled by default.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>Enable or disable Equal Cost Multipath Protocol support. Enabled by default.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Enable or disable DNS support. Enabled by default.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;

  /**
   * <p>One or more IPv4 or IPv6 CIDR blocks for the transit gateway. Must be a size /24 CIDR block or larger for IPv4, or a size /64 CIDR block or larger for IPv6.</p>
   */
  TransitGatewayCidrBlocks?: string[];
}

export namespace TransitGatewayRequestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRequest {
  /**
   * <p>A description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayRequestOptions;

  /**
   * <p>The tags to apply to the transit gateway.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a transit gateway.</p>
 */
export interface TransitGatewayOptions {
  /**
   * <p>A private Autonomous System Number (ASN) for the Amazon side of a BGP session.
   *          The range is 64512 to 65534 for 16-bit ASNs and 4200000000 to 4294967294 for 32-bit ASNs.</p>
   */
  AmazonSideAsn?: number;

  /**
   * <p>The transit gateway CIDR blocks.</p>
   */
  TransitGatewayCidrBlocks?: string[];

  /**
   * <p>Indicates whether attachment requests are automatically accepted.</p>
   */
  AutoAcceptSharedAttachments?: AutoAcceptSharedAttachmentsValue | string;

  /**
   * <p>Indicates whether resource attachments are automatically associated with the default association route table.</p>
   */
  DefaultRouteTableAssociation?: DefaultRouteTableAssociationValue | string;

  /**
   * <p>The ID of the default association route table.</p>
   */
  AssociationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether resource attachments automatically propagate routes to the default propagation route table.</p>
   */
  DefaultRouteTablePropagation?: DefaultRouteTablePropagationValue | string;

  /**
   * <p>The ID of the default propagation route table.</p>
   */
  PropagationDefaultRouteTableId?: string;

  /**
   * <p>Indicates whether Equal Cost Multipath Protocol support is enabled.</p>
   */
  VpnEcmpSupport?: VpnEcmpSupportValue | string;

  /**
   * <p>Indicates whether DNS support is enabled.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Indicates whether multicast is enabled on the transit gateway</p>
   */
  MulticastSupport?: MulticastSupportValue | string;
}

export namespace TransitGatewayOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayState = "available" | "deleted" | "deleting" | "modifying" | "pending";

/**
 * <p>Describes a transit gateway.</p>
 */
export interface TransitGateway {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway.</p>
   */
  TransitGatewayArn?: string;

  /**
   * <p>The state of the transit gateway.</p>
   */
  State?: TransitGatewayState | string;

  /**
   * <p>The ID of the Amazon Web Services account that owns the transit gateway.</p>
   */
  OwnerId?: string;

  /**
   * <p>The description of the transit gateway.</p>
   */
  Description?: string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The transit gateway options.</p>
   */
  Options?: TransitGatewayOptions;

  /**
   * <p>The tags for the transit gateway.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGateway {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGateway): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayResult {
  /**
   * <p>Information about the transit gateway.</p>
   */
  TransitGateway?: TransitGateway;
}

export namespace CreateTransitGatewayResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayResult): any => ({
    ...obj,
  });
}

export type ProtocolValue = "gre";

/**
 * <p>The options for a Connect attachment.</p>
 */
export interface CreateTransitGatewayConnectRequestOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol: ProtocolValue | string | undefined;
}

export namespace CreateTransitGatewayConnectRequestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectRequest {
  /**
   * <p>The ID of the transit gateway attachment. You can specify a VPC attachment or Amazon Web Services Direct Connect attachment.</p>
   */
  TransportTransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options: CreateTransitGatewayConnectRequestOptions | undefined;

  /**
   * <p>The tags to apply to the Connect attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Connect attachment options.</p>
 */
export interface TransitGatewayConnectOptions {
  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;
}

export namespace TransitGatewayConnectOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a transit gateway Connect attachment.</p>
 */
export interface TransitGatewayConnect {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the attachment from which the Connect attachment was created.</p>
   */
  TransportTransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the attachment.</p>
   */
  State?: TransitGatewayAttachmentState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect attachment options.</p>
   */
  Options?: TransitGatewayConnectOptions;

  /**
   * <p>The tags for the attachment.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnect): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectResult {
  /**
   * <p>Information about the Connect attachment.</p>
   */
  TransitGatewayConnect?: TransitGatewayConnect;
}

export namespace CreateTransitGatewayConnectResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectResult): any => ({
    ...obj,
  });
}

/**
 * <p>The BGP options for the Connect attachment.</p>
 */
export interface TransitGatewayConnectRequestBgpOptions {
  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;
}

export namespace TransitGatewayConnectRequestBgpOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectRequestBgpOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerRequest {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId: string | undefined;

  /**
   * <p>The peer IP address (GRE outer IP address) on the transit gateway side of the Connect peer, which must be
   *             specified from a transit gateway CIDR block. If not specified, Amazon automatically assigns
   *             the first available IP address from the transit gateway CIDR block.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The peer IP address (GRE outer IP address) on the appliance side of the Connect peer.</p>
   */
  PeerAddress: string | undefined;

  /**
   * <p>The BGP options for the Connect peer.</p>
   */
  BgpOptions?: TransitGatewayConnectRequestBgpOptions;

  /**
   * <p>The range of inside IP addresses that are used for BGP peering. You must specify a
   *             size /29 IPv4 CIDR block from the <code>169.254.0.0/16</code> range. The first address
   *             from the range must be configured on the appliance as the BGP IP address. You can also
   *             optionally specify a size /125 IPv6 CIDR block from the <code>fd00::/8</code>
   *             range.</p>
   */
  InsideCidrBlocks: string[] | undefined;

  /**
   * <p>The tags to apply to the Connect peer.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayConnectPeerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerRequest): any => ({
    ...obj,
  });
}

export type BgpStatus = "down" | "up";

/**
 * <p>The BGP configuration information.</p>
 */
export interface TransitGatewayAttachmentBgpConfiguration {
  /**
   * <p>The transit gateway Autonomous System Number (ASN).</p>
   */
  TransitGatewayAsn?: number;

  /**
   * <p>The peer Autonomous System Number (ASN).</p>
   */
  PeerAsn?: number;

  /**
   * <p>The interior BGP peer IP address for the transit gateway.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The interior BGP peer IP address for the appliance.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The BGP status.</p>
   */
  BgpStatus?: BgpStatus | string;
}

export namespace TransitGatewayAttachmentBgpConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayAttachmentBgpConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Connect peer details.</p>
 */
export interface TransitGatewayConnectPeerConfiguration {
  /**
   * <p>The Connect peer IP address on the transit gateway side of the tunnel.</p>
   */
  TransitGatewayAddress?: string;

  /**
   * <p>The Connect peer IP address on the appliance side of the tunnel.</p>
   */
  PeerAddress?: string;

  /**
   * <p>The range of interior BGP peer IP addresses.</p>
   */
  InsideCidrBlocks?: string[];

  /**
   * <p>The tunnel protocol.</p>
   */
  Protocol?: ProtocolValue | string;

  /**
   * <p>The BGP configuration details.</p>
   */
  BgpConfigurations?: TransitGatewayAttachmentBgpConfiguration[];
}

export namespace TransitGatewayConnectPeerConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeerConfiguration): any => ({
    ...obj,
  });
}

export type TransitGatewayConnectPeerState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a transit gateway Connect peer.</p>
 */
export interface TransitGatewayConnectPeer {
  /**
   * <p>The ID of the Connect attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The ID of the Connect peer.</p>
   */
  TransitGatewayConnectPeerId?: string;

  /**
   * <p>The state of the Connect peer.</p>
   */
  State?: TransitGatewayConnectPeerState | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Connect peer details.</p>
   */
  ConnectPeerConfiguration?: TransitGatewayConnectPeerConfiguration;

  /**
   * <p>The tags for the Connect peer.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayConnectPeer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayConnectPeer): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayConnectPeerResult {
  /**
   * <p>Information about the Connect peer.</p>
   */
  TransitGatewayConnectPeer?: TransitGatewayConnectPeer;
}

export namespace CreateTransitGatewayConnectPeerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayConnectPeerResult): any => ({
    ...obj,
  });
}

export type AutoAcceptSharedAssociationsValue = "disable" | "enable";

export type Igmpv2SupportValue = "disable" | "enable";

export type StaticSourcesSupportValue = "disable" | "enable";

/**
 * <p>The options for the transit gateway multicast domain.</p>
 */
export interface CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * <p>Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Specify whether to enable support for statically configuring multicast group sources for a domain.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export namespace CreateTransitGatewayMulticastDomainRequestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: CreateTransitGatewayMulticastDomainRequestOptions;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayMulticastDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomainOptions {
  /**
   * <p>Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain.</p>
   */
  Igmpv2Support?: Igmpv2SupportValue | string;

  /**
   * <p>Indicates whether support for statically configuring transit gateway multicast group sources is turned on.</p>
   */
  StaticSourcesSupport?: StaticSourcesSupportValue | string;

  /**
   * <p>Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain.</p>
   */
  AutoAcceptSharedAssociations?: AutoAcceptSharedAssociationsValue | string;
}

export namespace TransitGatewayMulticastDomainOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomainOptions): any => ({
    ...obj,
  });
}

export type TransitGatewayMulticastDomainState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes the transit gateway multicast domain.</p>
 */
export interface TransitGatewayMulticastDomain {
  /**
   * <p>The ID of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomainArn?: string;

  /**
   * <p> The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</p>
   */
  OwnerId?: string;

  /**
   * <p>The options for the transit gateway multicast domain.</p>
   */
  Options?: TransitGatewayMulticastDomainOptions;

  /**
   * <p>The state of the transit gateway multicast domain.</p>
   */
  State?: TransitGatewayMulticastDomainState | string;

  /**
   * <p>The time the transit gateway multicast domain was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The tags for the transit gateway multicast domain.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayMulticastDomain {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayMulticastDomain): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * <p>Information about the transit gateway multicast domain.</p>
   */
  TransitGatewayMulticastDomain?: TransitGatewayMulticastDomain;
}

export namespace CreateTransitGatewayMulticastDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayMulticastDomainResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the peer transit gateway with which to create the peering attachment.</p>
   */
  PeerTransitGatewayId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the peer transit gateway.</p>
   */
  PeerAccountId: string | undefined;

  /**
   * <p>The Region where the peer transit gateway is located.</p>
   */
  PeerRegion: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway peering attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * <p>The transit gateway peering attachment.</p>
   */
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;
}

export namespace CreateTransitGatewayPeeringAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPeeringAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the prefix list that is used for destination matches.</p>
   */
  PrefixListId: string | undefined;

  /**
   * <p>The ID of the attachment to which traffic is routed.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayPrefixListReferenceState = "available" | "deleting" | "modifying" | "pending";

/**
 * <p>Describes a transit gateway prefix list attachment.</p>
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated.</p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;
}

export namespace TransitGatewayPrefixListAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListAttachment): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a prefix list reference.</p>
 */
export interface TransitGatewayPrefixListReference {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the prefix list.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The ID of the prefix list owner.</p>
   */
  PrefixListOwnerId?: string;

  /**
   * <p>The state of the prefix list reference.</p>
   */
  State?: TransitGatewayPrefixListReferenceState | string;

  /**
   * <p>Indicates whether traffic that matches this route is dropped.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Information about the transit gateway attachment.</p>
   */
  TransitGatewayAttachment?: TransitGatewayPrefixListAttachment;
}

export namespace TransitGatewayPrefixListReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayPrefixListReference): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * <p>Information about the prefix list reference.</p>
   */
  TransitGatewayPrefixListReference?: TransitGatewayPrefixListReference;
}

export namespace CreateTransitGatewayPrefixListReferenceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayPrefixListReferenceResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteRequest {
  /**
   * <p>The CIDR range used for destination matches. Routing decisions are based on the
   *          most specific match.</p>
   */
  DestinationCidrBlock: string | undefined;

  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId: string | undefined;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>Indicates whether to drop traffic that matches this route.</p>
   */
  Blackhole?: boolean;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteState = "active" | "blackhole" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a route attachment.</p>
 */
export interface TransitGatewayRouteAttachment {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the attachment.</p>
   */
  TransitGatewayAttachmentId?: string;

  /**
   * <p>The resource type. Note that the <code>tgw-peering</code> resource type has been deprecated. </p>
   */
  ResourceType?: TransitGatewayAttachmentResourceType | string;
}

export namespace TransitGatewayRouteAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteAttachment): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteType = "propagated" | "static";

/**
 * <p>Describes a route for a transit gateway route table.</p>
 */
export interface TransitGatewayRoute {
  /**
   * <p>The CIDR block used for destination matches.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The ID of the prefix list used for destination matches.</p>
   */
  PrefixListId?: string;

  /**
   * <p>The attachments.</p>
   */
  TransitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * <p>The route type.</p>
   */
  Type?: TransitGatewayRouteType | string;

  /**
   * <p>The state of the route.</p>
   */
  State?: TransitGatewayRouteState | string;
}

export namespace TransitGatewayRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRoute): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteResult {
  /**
   * <p>Information about the route.</p>
   */
  Route?: TransitGatewayRoute;
}

export namespace CreateTransitGatewayRouteResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteResult): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The tags to apply to the transit gateway route table.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayRouteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableRequest): any => ({
    ...obj,
  });
}

export type TransitGatewayRouteTableState = "available" | "deleted" | "deleting" | "pending";

/**
 * <p>Describes a transit gateway route table.</p>
 */
export interface TransitGatewayRouteTable {
  /**
   * <p>The ID of the transit gateway route table.</p>
   */
  TransitGatewayRouteTableId?: string;

  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The state of the transit gateway route table.</p>
   */
  State?: TransitGatewayRouteTableState | string;

  /**
   * <p>Indicates whether this is the default association route table for the transit gateway.</p>
   */
  DefaultAssociationRouteTable?: boolean;

  /**
   * <p>Indicates whether this is the default propagation route table for the transit gateway.</p>
   */
  DefaultPropagationRouteTable?: boolean;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Any tags assigned to the route table.</p>
   */
  Tags?: Tag[];
}

export namespace TransitGatewayRouteTable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransitGatewayRouteTable): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayRouteTableResult {
  /**
   * <p>Information about the transit gateway route table.</p>
   */
  TransitGatewayRouteTable?: TransitGatewayRouteTable;
}

export namespace CreateTransitGatewayRouteTableResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayRouteTableResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the options for a VPC attachment.</p>
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * <p>Enable or disable DNS support. The default is <code>enable</code>.</p>
   */
  DnsSupport?: DnsSupportValue | string;

  /**
   * <p>Enable or disable IPv6 support.  The default is <code>disable</code>.</p>
   */
  Ipv6Support?: Ipv6SupportValue | string;

  /**
   * <p>Enable or disable support for appliance mode. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. The default is <code>disable</code>.</p>
   */
  ApplianceModeSupport?: ApplianceModeSupportValue | string;
}

export namespace CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentRequestOptions): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * <p>The ID of the transit gateway.</p>
   */
  TransitGatewayId: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The IDs of one or more subnets. You can specify only one subnet per Availability Zone.
   *          You must specify at least one subnet, but we recommend that you specify two subnets for better availability.
   *          The transit gateway uses one IP address from each specified subnet.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The VPC attachment options.</p>
   */
  Options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * <p>The tags to apply to the VPC attachment.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;
}

export namespace CreateTransitGatewayVpcAttachmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentRequest): any => ({
    ...obj,
  });
}

export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment;
}

export namespace CreateTransitGatewayVpcAttachmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTransitGatewayVpcAttachmentResult): any => ({
    ...obj,
  });
}

export interface CreateVolumeRequest {
  /**
   * <p>The Availability Zone in which to create the volume.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>Indicates whether the volume should be encrypted.
   *       The effect of setting the encryption state to <code>true</code> depends on
   * the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">Encryption by default</a>
   *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption.
   *       For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
   *         instance types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   *          <p>The following are the supported values for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io2</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>io1</code> and <code>io2</code> volumes support up to 64,000 IOPS only on
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a>. Other instance families support performance
   *       up to 32,000 IOPS.</p>
   *          <p>This parameter is required for <code>io1</code> and <code>io2</code> volumes.
   *       The default for <code>gp3</code> volumes is 3,000 IOPS.
   *       This parameter is not supported for <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The identifier of the Key Management Service (KMS) KMS key to use for Amazon EBS encryption.
   *       If this parameter is not specified, your KMS key for Amazon EBS is used. If <code>KmsKeyId</code> is
   *       specified, the encrypted state must be <code>true</code>.</p>
   *          <p>You can specify the KMS key using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Key alias. For example, alias/ExampleAlias.</p>
   *             </li>
   *             <li>
   *                <p>Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.</p>
   *             </li>
   *             <li>
   *                <p>Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid,
   *       the action can appear to complete, but eventually fails.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.
   *       If you specify a snapshot, the default is the snapshot size. You can specify a volume
   *       size that is equal to or larger than the snapshot size.</p>
   *          <p>The following are the supported volumes sizes for each volume type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code> and <code>io2</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   */
  Size?: number;

  /**
   * <p>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume type. This parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD: <code>gp2</code> | <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD: <code>io1</code> | <code>io2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD: <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD: <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic: <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   *          <p>Default: <code>gp2</code>
   *          </p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tags to apply to the volume during creation.</p>
   */
  TagSpecifications?: TagSpecification[];

  /**
   * <p>Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the
   *     	volume to up to 16 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the same Availability Zone. This parameter is
   *     	supported with <code>io1</code> and <code>io2</code> volumes only. For more information,
   *     	see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html">
   *     		Amazon EBS Multi-Attach</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput to provision for a volume, with a maximum of 1,000 MiB/s.</p>
   *          <p>This parameter is valid only for <code>gp3</code> volumes.</p>
   *   	      <p>Valid Range: Minimum value of 125. Maximum value of 1000.</p>
   */
  Throughput?: number;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency
   *       of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensure
   *         Idempotency</a>.</p>
   */
  ClientToken?: string;
}

export namespace CreateVolumeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVolumeRequest): any => ({
    ...obj,
  });
}

export type VolumeState = "available" | "creating" | "deleted" | "deleting" | "error" | "in-use";

/**
 * <p>Describes a volume.</p>
 */
export interface Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: VolumeAttachment[];

  /**
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) KMS key that was used to protect the
   *       volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Outpost.</p>
   */
  OutpostArn?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume state.</p>
   */
  State?: VolumeState | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS). For <code>gp3</code>, <code>io1</code>, and <code>io2</code> volumes, this represents
   *       the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline
   *       performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</p>
   */
  Iops?: number;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Indicates whether the volume was created using fast snapshot restore.</p>
   */
  FastRestored?: boolean;

  /**
   * <p>Indicates whether Amazon EBS Multi-Attach is enabled.</p>
   */
  MultiAttachEnabled?: boolean;

  /**
   * <p>The throughput that the volume supports, in MiB/s.</p>
   */
  Throughput?: number;
}

export namespace Volume {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Volume): any => ({
    ...obj,
  });
}

export interface CreateVpcRequest {
  /**
   * <p>The IPv4 network range for the VPC, in CIDR notation. For example,
   * 		        <code>10.0.0.0/16</code>. We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.</p>
   */
  CidrBlock: string | undefined;

  /**
   * <p>Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.
   *             You cannot specify the range of IP addresses, or the size of the CIDR block.</p>
   */
  AmazonProvidedIpv6CidrBlock?: boolean;

  /**
   * <p>The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.</p>
   */
  Ipv6Pool?: string;

  /**
   * <p>The IPv6 CIDR block from the IPv6 address pool. You must also specify <code>Ipv6Pool</code> in the request.</p>
   *         <p>To let Amazon choose the IPv6 CIDR block for you, omit this parameter.</p>
   */
  Ipv6CidrBlock?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The tenancy options for instances launched into the VPC. For <code>default</code>, instances
   *       are launched with shared tenancy by default. You can launch instances with any tenancy into a
   *       shared tenancy VPC. For <code>dedicated</code>, instances are launched as dedicated tenancy
   *       instances by default. You can only launch instances with a tenancy of <code>dedicated</code>
   *       or <code>host</code> into a dedicated tenancy VPC. </p>
   *          <p>
   *             <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p>
   *          <p>Default: <code>default</code>
   *          </p>
   */
  InstanceTenancy?: Tenancy | string;

  /**
   * <p>The name of the location from which we advertise the IPV6 CIDR block. Use this parameter to limit the address to this location.</p>
   *          <p> You must set <code>AmazonProvidedIpv6CidrBlock</code> to <code>true</code> to use this parameter.</p>
   */
  Ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * <p>The tags to assign to the VPC.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcRequest): any => ({
    ...obj,
  });
}

export interface CreateVpcResult {
  /**
   * <p>Information about the VPC.</p>
   */
  Vpc?: Vpc;
}

export namespace CreateVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcResult): any => ({
    ...obj,
  });
}

export enum VpcEndpointType {
  Gateway = "Gateway",
  GatewayLoadBalancer = "GatewayLoadBalancer",
  Interface = "Interface",
}

/**
 * <p>Contains the parameters for CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointRequest {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request,
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of endpoint.</p>
   *         <p>Default: Gateway</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC in which the endpoint will be used.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The service name. To get a list of available services, use the <a>DescribeVpcEndpointServices</a> request, or get the name from the service
   *             provider.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the
   *             service. The policy must be in valid JSON format. If this parameter is not specified, we
   *             attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route table IDs.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface and Gateway Load Balancer endpoints) The ID of one or more subnets in which to create an endpoint
   *             network interface. For a Gateway Load Balancer endpoint, you can specify one subnet only.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) The ID of one or more security groups to associate with the
   *             endpoint network interface.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure
   *                 idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>(Interface endpoint) Indicates whether to associate a private hosted zone with the
   *             specified VPC. The private hosted zone contains a record set for the default public DNS
   *             name for the service for the Region (for example,
   *                 <code>kinesis.us-east-1.amazonaws.com</code>), which resolves to the private IP
   *             addresses of the endpoint network interfaces in the VPC. This enables you to make
   *             requests to the default public DNS name for the service instead of the public DNS names
   *             that are automatically generated by the VPC endpoint service.</p>
   *         <p>To use a private hosted zone, you must set the following VPC attributes to
   *             <code>true</code>: <code>enableDnsHostnames</code> and
   *             <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC
   *             attributes.</p>
   *         <p>Default: <code>true</code>
   *          </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>The tags to associate with the endpoint.</p>
   */
  TagSpecifications?: TagSpecification[];
}

export namespace CreateVpcEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a DNS entry.</p>
 */
export interface DnsEntry {
  /**
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace DnsEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DnsEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a security group.</p>
 */
export interface SecurityGroupIdentifier {
  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

export namespace SecurityGroupIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityGroupIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>The last error that occurred for a VPC endpoint.</p>
 */
export interface LastError {
  /**
   * <p>The error message for the VPC endpoint error.</p>
   */
  Message?: string;

  /**
   * <p>The error code for the VPC endpoint error.</p>
   */
  Code?: string;
}

export namespace LastError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LastError): any => ({
    ...obj,
  });
}

export enum State {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Expired = "Expired",
  Failed = "Failed",
  Pending = "Pending",
  PendingAcceptance = "PendingAcceptance",
  Rejected = "Rejected",
}

/**
 * <p>Describes a VPC endpoint.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: VpcEndpointType | string;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  State?: State | string;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: string[];

  /**
   * <p>(Interface endpoint) One or more subnets in which the endpoint is located.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>(Interface endpoint) Information about the security groups that are associated with
   *             the network interface.</p>
   */
  Groups?: SecurityGroupIdentifier[];

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>Indicates whether the VPC endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: string[];

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: DnsEntry[];

  /**
   * <p>The date and time that the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>Any tags assigned to the VPC endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ID of the Amazon Web Services account that owns the VPC endpoint.</p>
   */
  OwnerId?: string;

  /**
   * <p>The last error that occurred for VPC endpoint.</p>
   */
  LastError?: LastError;
}

export namespace VpcEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcEndpoint): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the output of CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointResult {
  /**
   * <p>Information about the endpoint.</p>
   */
  VpcEndpoint?: VpcEndpoint;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateVpcEndpointResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVpcEndpointResult): any => ({
    ...obj,
  });
}
