/**
 * v0 by Vercel.
 * @see https://v0.dev/t/94mWTtErMk1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plans</h2>
              <p className="mt-2 text-muted-foreground">Choose the plan that fits your needs.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-medium">Features</th>
                    <th className="px-4 py-3 font-medium">Free</th>
                    <th className="px-4 py-3 font-medium">Launch</th>
                    <th className="px-4 py-3 font-medium">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Storage</td>
                    <td className="px-4 py-3">1 GB</td>
                    <td className="px-4 py-3">10 GB</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Compute (monthly)</td>
                    <td className="px-4 py-3">100 vCPU-hours</td>
                    <td className="px-4 py-3">500 vCPU-hours</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Compute hours</td>
                    <td className="px-4 py-3">100 hours</td>
                    <td className="px-4 py-3">500 hours</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Projects</td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Branches</td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Databases</td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Compute Features</td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Size: 1 vCPU, 2 GB RAM</li>
                        <li>Instant Read Replicas: No</li>
                        <li>Autoscaling: No</li>
                        <li>Autosuspend: No</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Size: 2 vCPU, 4 GB RAM</li>
                        <li>Instant Read Replicas: Yes</li>
                        <li>Autoscaling: Yes</li>
                        <li>Autosuspend: Yes</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Size: Customizable</li>
                        <li>Instant Read Replicas: Yes</li>
                        <li>Autoscaling: Yes</li>
                        <li>Autosuspend: Yes</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Region Availability</td>
                    <td className="px-4 py-3">US East</td>
                    <td className="px-4 py-3">US East, US West, EU</td>
                    <td className="px-4 py-3">Worldwide</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Max Concurrent Connections</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Tenant Isolation</td>
                    <td className="px-4 py-3">Shared</td>
                    <td className="px-4 py-3">Dedicated</td>
                    <td className="px-4 py-3">Dedicated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Advanced Postgres Features</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Connection Pooling</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Standard Extensions</td>
                    <td className="px-4 py-3">Limited</td>
                    <td className="px-4 py-3">All</td>
                    <td className="px-4 py-3">All</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Custom Extensions</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Security Features</td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>IP Allow Rules</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>IP Allow Rules</li>
                        <li>SOC 2 Report</li>
                        <li>Protected Branch</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>IP Allow Rules</li>
                        <li>SOC 2 Report</li>
                        <li>Protected Branch</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Additional Features</td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Organization Accounts</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Organization Accounts</li>
                        <li>Point-in-time Restore</li>
                        <li>Monitoring</li>
                        <li>Time Travel Connections</li>
                        <li>Schema Diff</li>
                        <li>Web Console</li>
                        <li>Neon CLI</li>
                        <li>Management API</li>
                        <li>Project Sharing</li>
                      </ul>
                    </td>
                    <td className="px-4 py-3">
                      <ul className="list-disc pl-4">
                        <li>Organization Accounts</li>
                        <li>Point-in-time Restore</li>
                        <li>Monitoring</li>
                        <li>Time Travel Connections</li>
                        <li>Schema Diff</li>
                        <li>Web Console</li>
                        <li>Neon CLI</li>
                        <li>Management API</li>
                        <li>Project Sharing</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Support</td>
                    <td className="px-4 py-3">Community</td>
                    <td className="px-4 py-3">Business</td>
                    <td className="px-4 py-3">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Data transfer</td>
                    <td className="px-4 py-3">1 GB</td>
                    <td className="px-4 py-3">10 GB</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }