const Breadcrumb = ({ pathParts, basePath = '' }) => {
    if (!pathParts || pathParts.length === 0) return;

    const breadcrumbs = [
        { label: 'Home', path: basePath || '/' }
    ];
    
    let currentPath = basePath || '';
    pathParts.forEach((part, index) => {
        currentPath += `/${part}`;
        breadcrumbs.push({
            label: formatLabel(part),
            path: currentPath,
            isLast: index === pathParts.length - 1
        });
    });

    return (
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Shop Page</h1>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                        {crumb.isLast ? (
                            <span className="breadcrumb-current" aria-current="page">
                                {crumb.label}
                            </span>
                        ) : (
                            <a href={crumb.path} className="breadcrumb-link">
                                {crumb.label}
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}

const formatLabel = (label) => {
  // Convertir kebab-case o snake_case a Title Case
  return label
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default Breadcrumb