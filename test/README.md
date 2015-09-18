
> bootstrap-postcss@0.0.1 test /app
> mocha "./test/components.js" "./node_modules/mocha/lib/reporters/markdown.js"



  Bootstrap v4 PostCSS
    1) component: alert
    ✓ component: animation
    ✓ component: breadcrumb
    2) component: button-group
    3) component: buttons
    ✓ component: card
    ✓ component: carousel
    ✓ component: close
    ✓ component: code
    ✓ component: custom-forms
    ✓ component: dropdown
    4) component: forms
    5) component: grid
    ✓ component: images
    6) component: input-group
    ✓ component: jumbotron
    ✓ component: labels
    7) component: list-group
    ✓ component: media
    ✓ component: modal
    ✓ component: nav
    8) component: navbar
    ✓ component: normalize
    ✓ component: pager
    ✓ component: pagination
    9) component: popover
    ✓ component: print
    ✓ component: progress
    ✓ component: reboot
    ✓ component: responsive-embed
    ✓ component: tables
    ✓ component: tooltip
    10) component: type
    ✓ component: utilities-responsive
    ✓ component: utilities-spacing
    ✓ component: utilities


  26 passing (542ms)
  10 failing

  1) Bootstrap v4 PostCSS component: alert:

      + expected - actual

                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#c1e2b4"
      +          "value": "#c1e2b3"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#a7d5ed"
      +          "value": "#a6d5ec"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#f8ecb5"
      +          "value": "#f7ecb5"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#e4baba"
      +          "value": "#e4b9b9"
               }
             ],
             "source": {
               "input": {
      
  

  2) Bootstrap v4 PostCSS component: button-group:

      + expected - actual

               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".btn-group > .btn-lg + .dropdown-toggle"
      +      "selector": ".btn-group-lg.btn-group > .btn + .dropdown-toggle,\n.btn-group > .btn-lg + .dropdown-toggle"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".btn-lg .caret"
      +      "selector": ".btn-group-lg > .btn .caret,\n.btn-lg .caret"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".dropup .btn-lg .caret"
      +      "selector": ".dropup .btn-group-lg > .btn .caret,\n.dropup .btn-lg .caret"
           },
           {
             "raws": {
               "before": "\n\n",
      
  

  3) Bootstrap v4 PostCSS component: buttons:

      + expected - actual

                     "file": "buttons.css"
                   }
                 },
                 "prop": "border",
      -          "value": "1px solid transparent"
      +          "value": ".0625rem solid transparent"
               },
               {
                 "raws": {
                   "before": "\n  ",
      
  

  4) Bootstrap v4 PostCSS component: forms:

      + expected - actual

                     "file": "forms.css"
                   }
                 },
                 "prop": "border",
      -          "value": "1px solid #ccc"
      +          "value": ".0625rem solid #ccc"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "padding",
      -          "value": ".375rem .75rem"
      +          "value": ".4375rem .75rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                         "file": "forms.css"
                       }
                     },
                     "prop": "line-height",
      -              "value": "2.25rem"
      +              "value": "2.375rem"
                   }
                 ],
                 "source": {
                   "input": {
                         "file": "forms.css"
                       }
                     },
                     "prop": "line-height",
      -              "value": "1.825rem"
      +              "value": "1.95rem"
                   }
                 ],
                 "source": {
                   "input": {
                         "file": "forms.css"
                       }
                     },
                     "prop": "line-height",
      -              "value": "3.16666rem"
      +              "value": "3.29167rem"
                   }
                 ],
                 "source": {
                   "input": {
                     "file": "forms.css"
                   }
                 },
                 "prop": "min-height",
      -          "value": "2.25rem"
      +          "value": "2.375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "padding-top",
      -          "value": ".375rem"
      +          "value": ".4375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "padding-bottom",
      -          "value": ".375rem"
      +          "value": ".4375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "background-position",
      -          "value": "center right .5625rem"
      +          "value": "center right .59375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "-webkit-background-size",
      -          "value": "1.4625rem 1.4625rem"
      +          "value": "1.54375rem 1.54375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "forms.css"
                   }
                 },
                 "prop": "background-size",
      -          "value": "1.4625rem 1.4625rem"
      +          "value": "1.54375rem 1.54375rem"
               }
             ],
             "source": {
               "input": {
      
  

  5) Bootstrap v4 PostCSS component: grid:

      + expected - actual

                   "input": {
                     "file": "grid.css"
                   }
                 },
      +          "prop": "float",
      +          "value": "left"
      +        }
      +      ],
      +      "source": {
      +        "input": {
      +          "file": "grid.css"
      +        }
      +      },
      +      "selector": ".col-xs-1,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9"
      +    },
      +    {
      +      "raws": {
      +        "before": "\n\n",
      +        "between": " ",
      +        "semicolon": true,
      +        "after": "\n"
      +      },
      +      "type": "rule",
      +      "nodes": [
      +        {
      +          "raws": {
      +            "before": "\n  ",
      +            "between": ": "
      +          },
      +          "type": "decl",
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
                 "prop": "width",
                 "value": "8.33333%"
               }
             ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-sm-1,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-md-1,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-lg-1,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-xl-1,\n  .col-xl-10,\n  .col-xl-11,\n  .col-xl-12,\n  .col-xl-2,\n  .col-xl-3,\n  .col-xl-4,\n  .col-xl-5,\n  .col-xl-6,\n  .col-xl-7,\n  .col-xl-8,\n  .col-xl-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
      
  

  6) Bootstrap v4 PostCSS component: input-group:

      + expected - actual

               "input": {
                 "file": "input-group.css"
               }
             },
      -      "selector": ".input-group-addon.form-control-sm"
      +      "selector": ".input-group-addon.form-control-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "input-group.css"
               }
             },
      -      "selector": ".input-group-addon.form-control-lg"
      +      "selector": ".input-group-addon.form-control-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn"
           },
           {
             "raws": {
               "before": "\n\n",
      
  

  7) Bootstrap v4 PostCSS component: list-group:

      + expected - actual

                     "file": "list-group.css"
                   }
                 },
                 "prop": "margin-bottom",
      -          "value": "-1px"
      +          "value": "-.0625rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                     "file": "list-group.css"
                   }
                 },
                 "prop": "border",
      -          "value": "1px solid #ddd"
      +          "value": ".0625rem solid #ddd"
               }
             ],
             "source": {
               "input": {
                     "file": "list-group.css"
                   }
                 },
                 "prop": "border-width",
      -          "value": "1px 0"
      +          "value": ".0625rem 0"
               },
               {
                 "raws": {
                   "before": "\n  ",
      
  

  8) Bootstrap v4 PostCSS component: navbar:

      + expected - actual

                     "file": "navbar.css"
                   }
                 },
                 "prop": "border",
      -          "value": "1px solid transparent"
      +          "value": ".0625rem solid transparent"
               },
               {
                 "raws": {
                   "before": "\n  ",
      
  

  9) Bootstrap v4 PostCSS component: popover:

      + expected - actual

                     "file": "popover.css"
                   }
                 },
                 "prop": "border-bottom",
      -          "value": "1px solid #eaeaea"
      +          "value": "1px solid #ebebeb"
               },
               {
                 "raws": {
                   "before": "\n  ",
      
  

  10) Bootstrap v4 PostCSS component: type:

      + expected - actual

                     "file": "type.css"
                   }
                 },
                 "prop": "border-top",
      -          "value": "1px solid rgba(0, 0, 0, .1)"
      +          "value": ".0625rem solid rgba(0, 0, 0, .1)"
               }
             ],
             "source": {
               "input": {
      
  



