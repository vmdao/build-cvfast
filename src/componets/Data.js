export default {
    "type": "div",
    "props": {
        "className": "cv-content"
    },
    "children": [
        {
            "type": "div", "props": { "className": "contact-spacer" },
            "children": [
                { "type": "div", "props": { "className": "spacer-stripe" }, "children": [] }]
        },
        {
            "type": "section", "props": { "data-bind": "profile" },
            "children": [{
                "type": "article", "props": { "className": "vcard", "data-bind": "content" },
                "children": [{
                    "type": "div", "props": { "className": "logo" },
                    "children": [{
                        "type": "div", "props": { "className": "css-crop bg-contain" },
                        "children": []
                    }]
                }, {
                    "type": "div", "props": { "className": "fn user-title" },
                    "children": [{
                        "type": "h1", "props": { "className": "full-name", "data-bind": "full_name" },
                        "children": []
                    }, { "type": "h2", "props": { "className": "title", "data-bind": "headline" }, "children": [] }]
                }]
            }]
        },
        {
            "type": "div", "props": { "className": "column-container" },
            "children": [{
                "type": "div", "props": { "className": "sidebar" },
                "children": [{
                    "type": "section", "props": { "data-bind": "profile_sidebar", "className": "nomargin vcard" },
                    "children": [{
                        "type": "article", "props": { "className": "contact_info", "data-bind": "content" },
                        "children": [{
                            "type": "div", "props": { "className": "user-thumbnail" },
                            "children": [{
                                "type": "div", "props": { "className": "thumbnail-overlay" },
                                "children": []
                            },
                            {
                                "type": "div", "props": { "className": "user-thumb photo", "data-bind": "thumb" },
                                "children": []
                            },
                            {
                                "type": "div", "props": { "className": "spacer-stripe" },
                                "children": []
                            }]
                        }, { "type": "div", "props": {}, "children": [{ "type": "div", "props": { "className": "adr" }, "children": [{ "type": "ul", "props": { "className": "user-contact" }, "children": [{ "type": "li", "props": { "className": "adr locality", "data-bind": "location" }, "children": [] }, { "type": "li", "props": { "className": "phone", "data-bind": "phone" }, "children": [] }, { "type": "li", "props": { "className": "email", "data-bind": "email" }, "children": [] }] }, { "type": "ul", "props": { "className": "user-links user-websites", "data-bind": "websites" }, "children": [] }] }] }]
                    }]
                }, { "type": "section", "props": { "data-bind": "sidebar_sections", "className": "text-section" }, "children": [] }, { "type": "div", "props": { "data-bind": "add-sidebar-section-btn" }, "children": [] }]
            }, { "type": "div", "props": { "className": "main" }, "children": [{ "type": "section", "props": { "data-bind": "sections" }, "children": [] }, { "type": "div", "props": { "data-bind": "add-section-btn" }, "children": [] }] }]
        }, {
            "type": "template", "props": { "id": "dated_story" },
            "children": [{
                "type": "header", "props": {},
                "children": [{
                    "type": "h3", "props": { "className": "header-text", "data-bind": "label" },
                    "children": []
                }]
            }, {
                "type": "article", "props": { "data-bind": "contents" },
                "children": [{ "type": "div", "props": { "className": "article-headings" }, "children": [{ "type": "h6", "props": { "className": "date-range" }, "children": [{ "type": "span", "props": { "data-bind": "start_date" }, "children": [] }, { "type": "span", "props": { "data-bind": "end_date" }, "children": [] }] }] }, { "type": "div", "props": { "className": "article-body" }, "children": [{ "type": "h4", "props": { "data-bind": "title" }, "children": [] }, { "type": "div", "props": { "data-bind": "organization_url", "target": "_blank", "rel": "nofollow" }, "children": [{ "type": "h5", "props": { "data-bind": "organization" }, "children": [] }] }, { "type": "p", "props": { "data-bind": "description" }, "children": [] }] }]
            }]
        }, {
            "type": "template", "props": { "id": "strengths" },
            "children": [
                {
                    "type": "header", "props": {},
                    "children": [
                        {
                            "type": "h3", "props": { "className": "header-text", "data-bind": "label" },
                            "children": []
                        }]
                },
                { "type": "article", "props": { "className": "competency", "data-bind": "contents" }, "children": [{ "type": "div", "props": { "className": "article-body competency" }, "children": [{ "type": "div", "props": { "data-bind": "level" }, "children": [] }, { "type": "h6", "props": { "data-bind": "name" }, "children": [] }, { "type": "p", "props": { "className": "competency-description", "data-bind": "description" }, "children": [] }] }, { "type": "div", "props": { "className": "clearfix" }, "children": [] }] }]
        }, {
            "type": "template", "props": { "id": "portfolio" },
            "children": [{
                "type": "header", "props": {},
                "children": [{ "type": "h3", "props": { "className": "header-text", "data-bind": "label" }, "children": [] }]
            },
            {
                "type": "article", "props": { "className": "portfolio", "data-bind": "content" },
                "children": [{ "type": "div", "props": { "data-bind": "description" }, "children": [{ "type": "p", "props": {}, "children": ["PortfolioDescription"] }] }, { "type": "div", "props": { "className": "row gallery" }, "children": [{ "type": "div", "props": { "className": "asset col-sm-4", "data-bind": "assets" }, "children": [{ "type": "a", "props": { "className": "asset-thumb", "data-bind": "file_url", "target": "_blank" }, "children": [{ "type": "div", "props": { "className": "asset-overlay" }, "children": [] }, { "type": "div", "props": { "className": "css-crop bg-cover" }, "children": [] }] }, { "type": "div", "props": { "target": "_blank", "rel": "nofollow", "data-bind": "link_url" }, "children": [{ "type": "label", "props": { "className": "text-center ellipsis", "data-bind": "title" }, "children": [] }] }] }] }]
            }]
        }, {
            "type": "template", "props": { "id": "text_story" },
            "children": [{
                "type": "header", "props": {},
                "children": [{ "type": "h3", "props": { "className": "header-text", "data-bind": "label" }, "children": [] }]
            },
            {
                "type": "article", "props": { "data-bind": "content" }, "children": [{
                    "type": "p", "props": { "data-bind": "description" },
                    "children": []
                }]
            }]
        }, {
            "type": "template", "props": { "id": "chart" },
            "children": [
                {
                    "type": "header", "props": {},
                    "children": [
                        { "type": "h3", "props": { "className": "header-text", "data-bind": "label" }, "children": [] }]
                },
                {
                    "type": "article", "props": { "className": "chart", "data-bind": "content" },
                    "children": [
                        {
                            "type": "div", "props": { "className": "article-headings" },
                            "children": [
                                { "type": "h4", "props": { "data-bind": "title" }, "children": [] }]
                        },
                        {
                            "type": "div", "props": { "className": "article-body" },
                            "children": [{ "type": "p", "props": { "data-bind": "description" }, "children": [] },
                            { "type": "div", "props": { "className": "chart-graph", "data-bind": "chart" }, "children": [] }]
                        },
                        { "type": "div", "props": { "className": "clearfix" }, "children": [] }]
                }]
        }
    ]
}