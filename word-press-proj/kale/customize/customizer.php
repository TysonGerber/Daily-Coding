<?php
/**
 * Customizer functionality
 *
 * @package kale
 */
?>
<?php 

/*------------------------------
 Panels and Sections
 ------------------------------*/

function kale_customizer_panels_sections( $wp_customize ) {
    
    #kale_section_general_settings
    $wp_customize->add_section( 'kale_section_theme_info', array(
        'title'       => esc_html__( 'Upgrade to Pro', 'kale' ),
        'priority'    => 0
    ) );
    
    #kale_section_general_settings
    $wp_customize->add_section( 'kale_section_general_settings', array(
        'title'       => esc_html__( 'General Settings', 'kale' ),
        'priority'    => 10
    ) );
    
    #kale_panel_frontpage
    $wp_customize->add_panel( 'kale_panel_frontpage', array(
        'priority'    => 61,
        'title'       => esc_html__( 'Front Page', 'kale' ),
    ) );
    $wp_customize->add_section( 'kale_section_frontpage_banner', array(
        'title'       => esc_html__( 'Banner / Slider', 'kale' ),
        'priority'    => 61,
        'panel'       => 'kale_panel_frontpage',
    ) );
    $wp_customize->add_section( 'kale_section_frontpage_featured_posts', array(
        'title'       => esc_html__( 'Featured Posts', 'kale' ),
        'priority'    => 62,
        'panel'       => 'kale_panel_frontpage',
    ) );
    $wp_customize->add_section( 'kale_section_frontpage_large_post', array(
        'title'       => esc_html__( 'Large / Highlight Post', 'kale' ),
        'priority'    => 64,
        'panel'       => 'kale_panel_frontpage',
    ) );
    
    #kale_section_blog_feed
    $wp_customize->add_section( 'kale_section_blog_feed', array(
        'title'       => esc_html__( 'Blog Feed', 'kale' ),
        'priority'    => 70
    ) );
    
    #kale_section_posts
    $wp_customize->add_section( 'kale_section_posts', array(
        'title'       => esc_html__( 'Posts', 'kale' ),
        'priority'    => 71,
    ) );
   
    #kale_section_pages
    $wp_customize->add_section( 'kale_section_pages', array(
        'title'       => esc_html__( 'Pages', 'kale' ),
        'priority'    => 72,
    ) );
    
    #kale_section_advanced
    $wp_customize->add_section( 'kale_section_advanced', array(
        'title'       => esc_html__( 'Advanced', 'kale' ),
        'priority'    => 90,
    ) );
}

add_action( 'customize_register', 'kale_customizer_panels_sections' );


/*------------------------------
 Fields
 ------------------------------*/
 
function kale_customizer_fields( $fields ) {
    
    global $kale_defaults;
    
    #kale_section_theme_info
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_theme_info',
        'label'       => esc_html__( 'KALE', 'kale' ),
        'description' => wp_kses_post(__( '
        <h1>Kale Pro</h1>
        <p><a class="button" href="https://www.lyrathemes.com/kale-pro/" target="_blank">Upgrade to Kale Pro</a></p>
        <p>Upgrade for the many awesome features and expert support included with the pro version of this theme. View the <a href="http://www.lyrathemes.com/preview/?theme=kale-pro" target="_blank">Kale Pro Demo</a> to see the additional features and functionality available in your upgrade.</p>
        <p>Pro Features:
        <ul>
            <li>&raquo; Slider options: custom slider</li>
            <li>&raquo; Built-in Ads</li>
            <li>&raquo; Built-in Related Posts</li>
            <li>&raquo; Built-in Recipe Shortcode</li>
            <li>&raquo; Recipe Index page template</li>
            <li>&raquo; Additional home page elements</li>
            <li>&raquo; Built-in social media sharing</li>
            <li>&raquo; One on one personal support and continuous theme updates</li>
        </ul>
        </p>
        <hr />
        <h1>Current Theme: Kale</h1>
        <h3>Demo Site</h3>
        <p>Head on over to the <a  href="http://www.lyrathemes.com/preview/?theme=kale" target="_blank">Kale demo</a> to see what you can accomplish with this theme!</p>
        <h3>Documentation</h3>
        <p>Read how to customize the theme, set up widgets, and learn of all the possible options available to you.</p>
        <p><a class="button" href="https://www.lyrathemes.com/documentation/kale.pdf" target="_blank">Kale Documentation</a></p>
        <h3>Sample Data</h3>
        <p>You can install the content and settings shown on our demo site by importing this sample data.</p>
        <p><a class="button" href="https://www.lyrathemes.com/sample-data/kale-sample-data.zip" target="_blank">Kale Sample Data</a></p>
        <h3>Feedback and Support</h3>
        <p>For feedback and support, please contact us and we would be happy to assist!</p>
        <p><a class="button" href="https://www.lyrathemes.com/support" target="_blank">Kale Support</a></p>
        ', 'kale' ) ),
        'section'     => 'kale_section_theme_info',
        'priority'    => 1,

        );
    
    #kale_section_general_settings
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'textarea',
        'settings'    => 'kale_footer_copyright',
        'label'       => esc_html__( 'Copyright Text', 'kale' ),
        'description' => esc_html__( 'Accepts HTML.', 'kale' ),
        'section'     => 'kale_section_general_settings',
        'priority'    => 2,
        'default'     => $kale_defaults['kale_footer_copyright'],
        'sanitize_callback' => 'force_balance_tags',
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_nav_search_icon',
        'label'       => esc_html__( 'Search Icon in Main Nav?', 'kale' ),
        'description' => esc_html__( 'Add the search icon in the main top navigation.', 'kale' ),
        'section'     => 'kale_section_general_settings',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_nav_search_icon']
    );
	$fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_example_content',
        'label'       => esc_html__( 'Show Example Content?', 'kale' ),
        'description' => esc_html__( 'Turning this off will disable all default/sample images for posts. It will also hide all default widgets in the Default Sidebar.', 'kale' ),
        'section'     => 'kale_section_general_settings',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_example_content']
    );
    
    #title_tagline
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'switch',
        'settings'    => 'kale_image_logo_show',
        'label'       => esc_html__( 'Show Image Logo?', 'kale' ),
        'description' => esc_html__( 'Choose whether to display the image logo.', 'kale' ),
        'section'     => 'title_tagline',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_image_logo_show'],
        'choices'     => array( 'on'  => esc_attr__( 'SHOW', 'kale' ), 'off' => esc_attr__( 'HIDE', 'kale' ) ),
    );
    $fields[] = array(
        'type'        => 'text',
        'settings'    => 'kale_text_logo',
        'label'       => esc_html__( 'Text Logo', 'kale' ),
        'description' => esc_html__( 'Displayed when `Show Image Logo?` is set to `Show` or if there is no logo image uploaded.', 'kale' ),
        'section'     => 'title_tagline',
        'priority'    => 2,
        'default'     => $kale_defaults['kale_text_logo'],
        'active_callback'  => array( array( 'setting'  => 'kale_image_logo_show', 'operator' => '==', 'value'    => '0' ) ),
        'sanitize_callback'=> 'sanitize_text_field'
    );
    
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_text_logo_sep1',
        'label'       => '<hr />', 
        'section'     => 'title_tagline',
        'priority'    => 3
    );
    
    #header_image
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'text',
        'settings'    => 'kale_banner_heading',
        'label'       => esc_html__( 'Caption Heading', 'kale' ),
        'section'     => 'header_image',
        'priority'    => 10,
        'default'     => $kale_defaults['kale_banner_heading'],
        'sanitize_callback' => 'sanitize_text_field',
    );
    $fields[] = array(
        'type'        => 'textarea',
        'settings'    => 'kale_banner_description',
        'label'       => esc_html__( 'Caption Description', 'kale' ),
        'section'     => 'header_image',
        'priority'    => 11,
        'default'     => $kale_defaults['kale_banner_description'],
        'sanitize_callback' => 'force_balance_tags'
    );
    $fields[] = array(
        'type'        => 'text',
        'settings'    => 'kale_banner_url',
        'label'       => esc_html__( 'Caption URL', 'kale' ),
        'section'     => 'header_image',
        'priority'    => 12,
        'default'     => $kale_defaults['kale_banner_url'],
        'sanitize_callback' => 'sanitize_text_field',
    );
    
    #kale_section_frontpage_banner
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'radio',
        'settings'    => 'kale_frontpage_banner',
        'label'       => esc_html__( 'Frontpage Banner / Slider', 'kale' ),
        'section'     => 'kale_section_frontpage_banner',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_frontpage_banner'],
        'choices'     => array(
                            'Banner'   => array(
                                esc_attr__( 'Banner', 'kale' ),
                                esc_attr__( 'Shows a banner with an optional caption. Set up the banner and the caption under `Header Image`.', 'kale' ),
                            ),
                            'Posts' => array(
                                esc_attr__( 'Posts Slider', 'kale' ),
                                esc_attr__( 'Select a category to show posts from in the slider. When you select this a new section will appear here with more options.', 'kale' ),
                            ),
                        ),
    );    
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_frontpage_posts_slider_desc',
        'label'       => wp_kses_post(__( '<hr />Posts Slider', 'kale' )),
        'description' => esc_html__( 'Select a category to show posts from in the slider. Also enter the number of posts to show from that category.', 'kale' ),
        'section'     => 'kale_section_frontpage_banner',
        'priority'    => 2,
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_banner', 'operator' => 'contains', 'value'    => 'Posts' ) )
    );    
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_posts_slider_category',
        'label'       => esc_html__( 'Posts Slider - Category', 'kale' ),
        'section'     => 'kale_section_frontpage_banner',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_frontpage_posts_slider_category'],
        'choices'     => Kirki_Helper::get_terms( 'category' ),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_banner', 'operator' => 'contains', 'value'    => 'Posts' ) )
    );
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_posts_slider_number',
        'label'       => esc_html__( 'Posts Slider - Number of Slides/Posts', 'kale' ),
        'section'     => 'kale_section_frontpage_banner',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_frontpage_posts_slider_number'],
        'choices'     => array('1'=>'1','2'=>'2','3'=>'3','4'=>'4','5'=>'5'),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_banner', 'operator' => 'contains', 'value'    => 'Posts' ) )
        
    );    
    
    #kale_section_frontpage_featured_posts
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'switch',
        'settings'    => 'kale_frontpage_featured_posts_show',
        'label'       => esc_html__( 'Show Featured Posts?', 'kale' ),
        'description' => esc_html__( 'Choose whether to display the featured posts under the banner/slider.', 'kale' ),
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_frontpage_featured_posts_show'],
        'choices'     => array( 'on'  => esc_attr__( 'SHOW', 'kale' ), 'off' => esc_attr__( 'HIDE', 'kale' ), )
    );
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_frontpage_featured_posts_sep1',
        'label'       => '<hr />', 
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 2,
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_featured_posts_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'text',
        'settings'    => 'kale_frontpage_featured_posts_heading',
        'label'       => esc_html__( 'Heading', 'kale' ),
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_frontpage_featured_posts_heading'],
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_featured_posts_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_featured_posts_post_1',
        'label'       => esc_html__( 'Post 1', 'kale' ),
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_frontpage_featured_posts_post_1'],
        'choices'     => Kirki_Helper::get_posts( array( 'numberposts' => -1 ) ),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_featured_posts_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_featured_posts_post_2',
        'label'       => esc_html__( 'Post 2', 'kale' ),
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 5,
        'default'     => $kale_defaults['kale_frontpage_featured_posts_post_2'],
        'choices'     => Kirki_Helper::get_posts( array( 'numberposts' => -1 ) ),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_featured_posts_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_featured_posts_post_3',
        'label'       => esc_html__( 'Post 3', 'kale' ),
        'section'     => 'kale_section_frontpage_featured_posts',
        'priority'    => 6,
        'default'     => $kale_defaults['kale_frontpage_featured_posts_post_3'],
        'choices'     => Kirki_Helper::get_posts( array( 'numberposts' => -1 ) ),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_featured_posts_show', 'operator' => '==', 'value'    => '1', ), )
    );
    
    /* kale_section_frontpage_large_post */
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'switch',
        'settings'    => 'kale_frontpage_large_post_show',
        'label'       => esc_html__( 'Show Large / Highlight Post?', 'kale' ),
        'description' => esc_html__( 'Choose whether to display the large post under the blog feed.', 'kale' ),
        'section'     => 'kale_section_frontpage_large_post',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_frontpage_large_post_show'],
        'choices' => array( 'on'  => esc_attr__( 'SHOW', 'kale' ), 'off' => esc_attr__( 'HIDE', 'kale' ), )
    );
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_frontpage_large_post_sep1',
        'label'       => '<hr />', 
        'section'     => 'kale_section_frontpage_large_post',
        'priority'    => 2,
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_large_post_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'text',
        'settings'    => 'kale_frontpage_large_post_heading',
        'label'       => esc_html__( 'Select Large / Highlight Post', 'kale' ),
        'section'     => 'kale_section_frontpage_large_post',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_frontpage_large_post_heading'],
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_large_post_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'select',
        'settings'    => 'kale_frontpage_large_post',
        'label'       => esc_html__( 'Select Large / Highlight Post', 'kale' ),
        'section'     => 'kale_section_frontpage_large_post',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_frontpage_large_post'],
        'choices'     => Kirki_Helper::get_posts( array( 'numberposts' => -1 ) ),
        'active_callback'  => array( array( 'setting'  => 'kale_frontpage_large_post_show', 'operator' => '==', 'value'    => '1', ), )
    );
    
    /* kale_section_blog_feed */
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'switch',
        'settings'    => 'kale_blog_feed_meta_show',
        'label'       => esc_html__( 'Show Meta?', 'kale' ),
        'description' => esc_html__( 'Choose whether to display date, category, author, tags for posts in the blog feed. This applies to all blog feeds on all pages, including the front page.', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_blog_feed_meta_show'],
        'choices' => array( 'on'  => esc_attr__( 'SHOW', 'kale' ), 'off' => esc_attr__( 'HIDE', 'kale' ), )
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_blog_feed_date_show',
        'label'       => esc_html__( 'Show Date?', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 2,
        'default'     => $kale_defaults['kale_blog_feed_date_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_blog_feed_meta_show', 'operator' => '==', 'value'    => '1', ),)
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_blog_feed_category_show',
        'label'       => esc_html__( 'Show Category?', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_blog_feed_category_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_blog_feed_meta_show', 'operator' => '==', 'value'    => '1', ),)
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_blog_feed_author_show',
        'label'       => esc_html__( 'Show Author?', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_blog_feed_author_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_blog_feed_meta_show', 'operator' => '==', 'value'    => '1', ),)
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_blog_feed_comments_show',
        'label'       => esc_html__( 'Show Comments?', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 5,
        'default'     => $kale_defaults['kale_blog_feed_comments_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_blog_feed_meta_show', 'operator' => '==', 'value'    => '1', ),)
    );
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_blog_feed_sep1',
        'label'       => '<hr />', 
        'section'     => 'kale_section_blog_feed',
        'priority'    => 6
    );
    $fields[] = array(
        'type'        => 'radio',
        'settings'    => 'kale_blog_feed_post_format',
        'label'       => esc_html__( 'Post Display Format (With Sidebar)', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 7,
        'default'     => $kale_defaults['kale_blog_feed_post_format'],
        'choices'     => array(
                            'Mixed'  => array(
                                esc_attr__( '2 Small Posts, Followed by 1 Full', 'kale' ),
                            ),
                            'Small' => array(
                                esc_attr__( 'Small Image and Excerpt, 2 in a Row', 'kale' ),
                            ),                            
                        ),
    );
    $fields[] = array(
        'type'        => 'text',
        'settings'     => 'kale_blog_feed_label',
        'label'       => __( 'Heading for Blog Feed on Home Page', 'kale' ),
        'description' => __( 'The `Recent Posts` label on the home page.', 'kale' ),
        'section'     => 'kale_section_blog_feed',
        'priority'    => 8,
        'default'     => $kale_defaults['kale_blog_feed_label'],
        'sanitize_callback'=> 'sanitize_text_field'
    );
	
    /* kale_section_posts */
    #-----------------------------------------
    
    $fields[] = array(
        'type'        => 'switch',
        'settings'    => 'kale_posts_meta_show',
        'label'       => esc_html__( 'Show Meta?', 'kale' ),
        'description' => esc_html__( 'Choose whether to display date, category, author, tags for posts on the post page.', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 1,
        'default'     => $kale_defaults['kale_posts_meta_show'],
        'choices' => array( 'on'  => esc_attr__( 'SHOW', 'kale' ), 'off' => esc_attr__( 'HIDE', 'kale' ), )
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_posts_date_show',
        'label'       => esc_html__( 'Show Date?', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 2,
        'default'     => $kale_defaults['kale_posts_date_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_posts_meta_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_posts_category_show',
        'label'       => esc_html__( 'Show Category?', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 3,
        'default'     => $kale_defaults['kale_posts_category_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_posts_meta_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_posts_author_show',
        'label'       => esc_html__( 'Show Author?', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 4,
        'default'     => $kale_defaults['kale_posts_author_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_posts_meta_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_posts_tags_show',
        'label'       => esc_html__( 'Show Tags?', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 5,
        'default'     => $kale_defaults['kale_posts_tags_show'],
        'active_callback'  => array( array( 'setting'  => 'kale_posts_meta_show', 'operator' => '==', 'value'    => '1', ), )
    );
    $fields[] = array(
        'type'        => 'custom',
        'settings'    => 'kale_posts_sep1',
        'label'       => '<hr />', 
        'section'     => 'kale_section_posts',
        'priority'    => 6
    );
    $fields[] = array(
        'type'        => 'radio-image',
        'settings'    => 'kale_posts_sidebar',
        'label'       => esc_html__( 'Layout', 'kale' ),
        'description' => esc_html__( 'Choose whether to display the sidebar.', 'kale' ),
        'section'     => 'kale_section_posts',
        'default'     => $kale_defaults['kale_posts_sidebar'],
        'priority'    => 7,
        'choices'     => array( '0' => trailingslashit( get_template_directory_uri() ) . 'customize/images/full.png',
                                '1' => trailingslashit( get_template_directory_uri() ) . 'customize/images/sidebar.png', ),
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_posts_featured_image_show',
        'label'       => esc_html__( 'Show Featured Image ?', 'kale' ),
        'description' => esc_html__( 'Whether to show featured image at the beginning of the post.', 'kale' ),
        'section'     => 'kale_section_posts',
        'priority'    => 8,
        'default'     => $kale_defaults['kale_posts_featured_image_show']
    );
    
    /* kale_section_pages */
    #-----------------------------------------
    
   $fields[] = array(
        'type'        => 'radio-image',
        'settings'    => 'kale_pages_sidebar',
        'label'       => esc_html__( 'Layout', 'kale' ),
        'description' => esc_html__( 'Choose whether to display the sidebar.', 'kale' ),
        'section'     => 'kale_section_pages',
        'default'     => $kale_defaults['kale_pages_sidebar'],
        'priority'    => 1,
        'choices'     => array( '0' => trailingslashit( get_template_directory_uri() ) . 'customize/images/full.png',
                                '1' => trailingslashit( get_template_directory_uri() ) . 'customize/images/sidebar.png', ),
    );
    $fields[] = array(
        'type'        => 'toggle',
        'settings'    => 'kale_pages_featured_image_show',
        'label'       => esc_html__( 'Show Featured Image ?', 'kale' ),
        'description' => esc_html__( 'Whether to show featured image at the beginning of the page.', 'kale' ),
        'section'     => 'kale_section_pages',
        'priority'    => 2,
        'default'     => $kale_defaults['kale_pages_featured_image_show']
    );
    
    /* kale_section_advanced */
    #-----------------------------------------
   
	if(kale_show_custom_css_field()) {
    $fields[] = array(
        'type'        => 'code',
        'settings'    => 'kale_advanced_css',
        'label'       => esc_html__( 'Custom CSS', 'kale' ),
        'description' => esc_html__( 'Custom CSS code to modify styling.', 'kale' ),
        'section'     => 'kale_section_advanced',
        'priority'    => 1,
        'choices'     => array( 'language' => 'css', 'theme'    => 'monokai', 'height'   => 250, ),
        'sanitize_callback' => 'wp_filter_nohtml_kses'
    );
    }
	
    return $fields;
}

add_filter( 'kirki/fields', 'kale_customizer_fields' );
?>