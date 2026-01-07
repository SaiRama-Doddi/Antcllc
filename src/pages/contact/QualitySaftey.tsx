export default function QualitySafety() {
  return (
    <div className="grid lg:grid-cols-2 gap-12">

      {/* QUALITY POLICY */}
      <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
        <h3 className="text-3xl font-bold text-yellow-500 mb-6">
          Quality Policy
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            To constantly meet and strive to exceed the agreed requirements of our
            clients in the most cost-effective manner by providing a high standard
            of management, technical expertise, value engineering, and workmanship.
          </p>

          <p>
            This will be achieved by employing professional people with drive and
            determination to work as a team with our clients in a non-adversarial
            manner.
          </p>

          <p>
            It is our commitment to maintain a management system which reflects the
            way our business works, our clients’ needs, and the requirements of
            international standards for quality systems.
          </p>
        </div>
      </div>

      {/* SAFETY POLICY */}
      <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
        <h3 className="text-3xl font-bold text-yellow-500 mb-6">
          Safety Policy
        </h3>

        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            Our Safety Policy is designed to comply with the standards of the Safety
            and Health Administration and to endeavour to maintain a safe and
            injury/illness-free workplace.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Accident and incident prevention is a prime concern of all employees.
            </li>
            <li>
              Commitment to a safe workplace for employees, subcontractors, and
              suppliers.
            </li>
            <li>
              Prevention of wasteful and inefficient operations.
            </li>
            <li>
              Protection of properties, equipment, and the environment.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
