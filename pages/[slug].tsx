import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { parseMarkdownFile } from '../utils/parseMarkdown'
import { FrontMatter } from '../types'
import fs from 'fs'
import path from 'path'

interface ProjectProps {
    frontMatter: FrontMatter
    content: string
}

const ProjectPage: NextPage<ProjectProps> = ({ frontMatter, content }) => {
    return (
        <>
            <h1>{frontMatter.title}</h1>
            <p>{frontMatter.subtitle}</p>
            <p>{frontMatter.description}</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const filePath = path.join('content', slug + '.md')
    const { frontMatter, content } = parseMarkdownFile(filePath)

    return {
        props: {
            frontMatter,
            content,
        },
    };
};

export default ProjectPage;